The website so-fifa.com has a player rating calculator written in what one would describe as semi-obfuscated JavaScript. Here it is implemented in Python.

calculator.py has two headline functions:
- `calculate_ratings`, which expects a dict of attributes for a single player as input and returns position ratings for that player in all positions or (optionally) a subset of positions
- `calculate_ratings_from_frame` which works similarly to `calculate_ratings` but expects a pandas `DataFrame` with attributes for multiple players, and returns a `DataFrame` of their position ratings.