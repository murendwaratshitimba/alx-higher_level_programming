#!/usr/bin/node

// A script that prints all characters of a Star Wars movie

const request = require('request');
const url = `https://swapi-api.hbtn.io/api/films/${process.argv[2]}`;
request(url, (error, res, body) => {
  if (!error) {
    const characters = JSON.parse(body).characters;
    characters.forEach((character) => {
      request(character, function (error, res, body) {
        if (!error) {
          console.log(JSON.parse(body).name);
        }
      });
    });
  }
});
