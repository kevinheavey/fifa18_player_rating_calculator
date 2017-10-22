import json
from pathlib import Path
import functools


@functools.lru_cache()
def get_position_blueprint_dict(position_subset=None):
    filepath = Path(__file__).parent / 'resources' / 'position_rating_blueprint.json'
    with open(filepath, 'r') as fp:
        json_dict = json.load(fp)
    if position_subset is not None:
        result = {pos: json_dict[pos] for pos in position_subset}
    else:
        result = json_dict
    return result


def add_reputation(value, international_reputation, subtraction):
    value = round(value)
    increase = max(international_reputation - subtraction, 1)
    return value + increase # the js function rounds again on this line, but that's redundant


def check_potential(value, potential):
    """Value cannot be higher than potential"""
    return min(value, potential)


def process_raw_rating(rating, international_reputation, rep_subtraction, potential):
    contrib_plus_reputation = add_reputation(rating, international_reputation, rep_subtraction)
    capped_contrib = check_potential(contrib_plus_reputation, potential)
    return capped_contrib


def calculate_ratings(attribute_dict, position_subset=None):
    position_blueprint_dict = get_position_blueprint_dict(position_subset)
    international_rep = attribute_dict['International reputation']
    potential = attribute_dict['Potential']
    position_ratings = {}
    for position, sub_dict in position_blueprint_dict.items():
        coefficient_dict = sub_dict['coefficients']
        rep_subtraction = sub_dict['reputation_subtraction']
        raw_position_rating = sum(coefficient * attribute_dict[stat]
                                  for stat, coefficient in coefficient_dict.items())
        position_ratings[position] = process_raw_rating(raw_position_rating, international_rep, 
                                                        rep_subtraction, potential)
    return position_ratings

def _duplicate_col(single_col, dupe_names):
    name = single_col.name
    return (single_col
            .to_frame()
            .assign(**{dupe_name:lambda df: df[name] for dupe_name in dupe_names})
            .drop(name, axis=1))

def calculate_ratings_from_frame(attribute_df, position_subset=None):
    import pandas as pd

    blueprint = get_position_blueprint_dict(position_subset)
    blueprint_items = list(blueprint.items())
    blueprint_keys = list(blueprint.keys())
    coefs_df = pd.DataFrame({pos: subdict['coefficients'] for pos, subdict in blueprint_items}).fillna(0)
    rep_subtractions = pd.Series({pos: subdict['reputation_subtraction'] for pos, subdict in blueprint_items})
    raw_pos_ratings = attribute_df.drop(['International reputation', 'Potential'], axis=1).dot(coefs_df)
    internat_reps = _duplicate_col(attribute_df['International reputation'], blueprint_keys)

    internat_rep_increases = (internat_reps - rep_subtractions).where(lambda df: df >= 1, 1)
    uncapped_ratings = raw_pos_ratings.round() + internat_rep_increases
    potentials = _duplicate_col(attribute_df['Potential'], blueprint_keys)
    calculated_ratings = uncapped_ratings.where(uncapped_ratings <= potentials, potentials)

    return calculated_ratings
