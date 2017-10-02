import os

def file_in_same_dir(filename):
    print('file is '__file__)
    return os.path.join(os.path.dirname(__file__), filename)