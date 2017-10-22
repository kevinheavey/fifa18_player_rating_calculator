from pathlib import Path

def file_in_same_dir(filename):
    return Path(__file__).parent / filename