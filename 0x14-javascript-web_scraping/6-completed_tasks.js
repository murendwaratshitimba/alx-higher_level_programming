#!/usr/bin/node

// A script that computes the number of tasks completed by user id.

const args = process.argv;
const reqURL = args[2];
const request = require('request');
request(reqURL, function (error, response, body) {
  if (error) {
    console.log('error:', error);
  } else {
    const tasks = JSON.parse(body);
    const completed = {};
    for (let i = 0; i < tasks.length; i++) {
      const status = (tasks[i].completed);
      const key = tasks[i].userId.toString();
      if (status) {
        if (completed[key]) {
          completed[key]++;
        } else {
          completed[key] = 1;
        }
      }
    }
    console.log(completed);
  }
});
