#!/usr/bin/python3
"""Technical interview preparation"""


def find_peak(list_of_integers):
    """
    function that finds a peak in a list of unsorted integers

    constraints:

        -> You are not allowed to import any module
        -> Your algorithm must have the lowest complexity
    """

    
    # if there is no list of integers return None
    if list_of_integers == []:
        return None
    
    length = len(list_of_integers)

    start_index, end_index = 0, length - 1

    while start_index < end_index:

        middle_index = int(start_index + \
                       (end_index - start_index) / 2)

        if list_of_integers[middle_index] > \
           list_of_integers[middle_index - 1] \
           and list_of_integers[middle_index] > \
           list_of_integers[middle_index + 1]:
            
            return list_of_integers[middle_index]
        
        if list_of_integers[middle_index - 1]\
            > list_of_integers[middle_index + 1]:
            end_index = middle_index

        else:

            start_index = middle_index + 1

    return list_of_integers[start_index]