import os

def file_in_same_dir(filename):
    return os.path.join(os.path.dirname(__file__), filename)