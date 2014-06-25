#! /usr/bin/env node

var yoplait = require('yoplait');
var args = require('minimist')(process.argv.slice(2));
var input = argv._;

var udid = yoplait.genUdid();
var username = 'justyo ' + Date.now();

console.log('signing up \'' + username + '\' with udid ' + udid)
yoplait.newUser(username, udid, function(err, yo) {
  if (err) {
    return console.log('sign up failed!: ', err);
  }

  yo.sendYo((input[0] || input), function(err) {
    if (err) {
      console.log("Wasn't able to yo " + input + ". :(")
      console.dir(err);
    } else {
      console.log("Yo'd " + input + "! :)");
    }
  })
})