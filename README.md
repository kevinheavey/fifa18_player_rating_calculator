The website [sofifa.com](https://sofifa.com) has a player rating calculator in minified JavaScript. Here it is implemented in Python.

calculator.py has two top-level functions:
- `calculate_ratings`, which expects a dict of attributes for a single player as input and returns position ratings for that player in all positions or (optionally) a subset of positions
- `calculate_ratings_from_frame`, which works similarly to `calculate_ratings` but expects a pandas `DataFrame` with attributes for multiple players, and returns a `DataFrame` of their position ratings.

For an example of a project that uses the output of this calculator, check out [this Kaggle kernel](https://www.kaggle.com/kevinmh/evaluating-the-sofifa-com-rating-calculator)