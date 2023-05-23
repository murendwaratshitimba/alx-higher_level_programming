#!/usr/bin/node

/* script that prints all characters of a Star Wars movie */

const request = require('request');
const url = 'https://swapi-api.hbtn.io/api/films/' + process.argv[2];

function printCharacters (characters, index) {
  request(characters[index], (error, res, body) => {
    if (error) {
      console.log(error);
    } else {
      console.log(JSON.parse(body).name);
      if (index + 1 < characters.length) {
        printCharacters(characters, index + 1);
      }
    }
  });
}

request(url, (error, res, body) => {
  if (error) {
    console.log(error);
  } else {
    printCharacters(JSON.parse(body).characters, 0);
  }
});
