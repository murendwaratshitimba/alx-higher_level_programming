#!/usr/bin/python3
def search_replace(my_list, search, replace):
    copy = []
    for item in range(len(my_list)):
        if my_list[item] == search:
            copy.append(replace)
        else:
            copy.append(my_list[item])
    return copy
