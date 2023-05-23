#!/usr/bin/node

/* script that prints the title of a Star Wars movie where
the episode number matches a given integer */

const request = require('request');
const episode = process.argv[2];
const API_URL = 'https://swapi-api.hbtn.io/api/films/';

request(API_URL + episode, function (error, response, body) {
  if (error) {
    console.log(error);
  } else if (response.statusCode === 200) {
    console.log(JSON.parse(body).title);
  } else {
    console.log('Error code: ' + response.statusCode);
  }
});
