#!/usr/bin/python3

def best_score(a_dictionary):
    """Returns a key with the biggest integer value."""
    if not isinstance(a_dictionary, dict) or len(a_dictionary) == 0:
        return None

    temp_key = list(a_dictionary.keys())[0]
    max_value = a_dictionary[temp_key]
    for key, value in a_dictionary.items():
        if value > max_value:
            max_value = value
            temp_key = key
    return (temp_key)
