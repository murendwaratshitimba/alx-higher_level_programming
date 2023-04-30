#!/usr/bin/python3
"""
Script that takes in a URL and an email, sends a POST request to the passed
URL with the email as a parameter, and displays the body of the response
(decoded in utf-8).
"""
from sys import argv
from urllib.parse import urlencode
from urllib.request import Request, urlopen


if __name__ == "__main__":

    with urlopen(Request(argv[1],
         urlencode({"email": argv[2]}).encode("ascii"))) as response:
        print(response.read().decode("utf-8", "replace"))
