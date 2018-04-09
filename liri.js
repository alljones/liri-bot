//Set environment variables with the dotenv package
require("dotenv").config();

// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
var request = require("request");

// Include the keys.js so we can use it in our Node app.
var keys = require("keys.js");

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);