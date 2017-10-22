import json
from resources.utils import file_in_same_dir

def read_file():
    js_filepath = file_in_same_dir('fifa_calculator.js')
    with open(js_filepath, 'r') as js_file:
        func_str = js_file.read()
    return func_str
    
def get_calc_func_sections():
    js_func_str = read_file()
    calc_func = js_func_str[js_func_str.find(';') + 2:js_func_str.find('function b')].lstrip()
    calc_func_sections = calc_func.split('a = .')
    return calc_func_sections   
    
def get_abbreviation_dict():
    filepath = file_in_same_dir('abbreviation_dict.json')
    with open(filepath, 'r') as fp:
        return json.load(fp)

def player_pos_from_line(line):
    loc = line.find('#') + 1
    return line[loc:line.find('"', loc)]

def func_from_line(line):
    return line[line.find('=') + 2]

def stat_abbrev_from_line(line):
    loc = line.find('"') + 1
    return line[loc:loc + 2].upper()

def coef_from_line(line):
    loc = line.find('.')
    return float('0' + line[loc:loc + 3])

def process_formula(formula):
    abbreviation_dict = get_abbreviation_dict()
    coefficient_dict = {}
    for line in formula.split('\n'):
        stat_abbrev = stat_abbrev_from_line(line)
        stat_full_name = abbreviation_dict[stat_abbrev]
        coefficient = coef_from_line(line)
        coefficient_dict[stat_full_name] = coefficient
    return coefficient_dict
    
def get_blueprint_dict():
    reputation_subtractions = {'c':1, 'd':2} # worked out by manual inspection of the .js file
    position_blueprint_dict = {}
    calc_func_sections = get_calc_func_sections()
    for section in calc_func_sections[1:]: # the first section is empty
        subsections = section.split(',')
        formula = '.' + subsections[0] # add the . back in
        func_call_line = subsections[1]
        player_position_line = subsections[2]
        coefficient_dict = process_formula(formula)
        func = func_from_line(func_call_line)
        reputation_subtraction = reputation_subtractions[func]
        player_position = player_pos_from_line(player_position_line)
        position_blueprint_dict[player_position] = {'coefficients':coefficient_dict, 
                                                 'reputation_subtraction':reputation_subtraction}
    return position_blueprint_dict
    
def export_json():
    filepath = file_in_same_dir('position_rating_blueprint.json')
    blueprint = get_blueprint_dict()
    with open(filepath, 'w') as fp:
        json.dump(blueprint, fp)
    
if __name__ == '__main__':
    export_json()

