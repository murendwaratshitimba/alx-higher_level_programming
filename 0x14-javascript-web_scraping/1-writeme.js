#!/usr/bin/node

// script that writes a string to a file

const fs = require('fs');

try {
  fs.writeFile(process.argv[2], process.argv[3], 'utf8',

    function (error) {
      if (error) console.log(error);
    });
} catch (error) {
  console.log(error);
}
