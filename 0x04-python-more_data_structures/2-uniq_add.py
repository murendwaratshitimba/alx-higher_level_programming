#!/usr/bin/python3
def uniq_add(my_list=[]):
    new = set(my_list)
    res = 0
    for item in new:
        res += item
    return res
