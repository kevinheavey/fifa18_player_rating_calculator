"""Maps abbreviations to player attributes (e.g. ac = acceleration) 
through the get_abbreviation_dict function. 
This is useful because the JavaScript function uses the abbreviations, not full names."""
from bs4 import BeautifulSoup
import requests

DEFAULT_PLAYER_NUMBER = 20801 # any number works

def scrape_calculator_page(player_number=DEFAULT_PLAYER_NUMBER):
    """Gets calculator page content using requests and returns BeautifulSoup object.
    For this project the player number doesn't actually matter. It just has to be a number"""
    url = f'https://sofifa.com/player/calculator/{player_number}'
    calculator_page = requests.get(url) # we can use any player
    soup = BeautifulSoup(calculator_page.content, 'html.parser')
    return soup

def _get_player_attribute_list_items(player_number=DEFAULT_PLAYER_NUMBER):
    """returns a list of HTML <li>s which we use to map abbreviations to player attributes"""
    soup = scrape_calculator_page(player_number)
    html_article = soup.find('article')
    player_attribute_list_items = html_article.find_all('li', class_='text-clip')
    return player_attribute_list_items
    
def get_abbreviation_dict(player_number=DEFAULT_PLAYER_NUMBER):
    """Matches the player attributes to their abbreviations. Returns a dict"""
    player_attribute_list_items = _get_player_attribute_list_items(player_number=DEFAULT_PLAYER_NUMBER)
    abbreviation_dict = {}
    for item in player_attribute_list_items:
        input_ = item.find('input')
        if input_ is not None:
            player_attribute_abbreviation = input_.attrs['name']
            player_attribute_full_name = item.text.strip()
            abbreviation_dict[player_attribute_abbreviation] = player_attribute_full_name
    # international reputation came separately from the other attributes
    abbreviation_dict['ir'] = 'international_reputation'
    # give the dict values underscores instead of spaces, which might come in handy for a pandas DataFrame
    abbreviation_dict = {key:val.lower().replace(' ', '_') for key, val in abbreviation_dict.items()}
    return abbreviation_dict