//Set environment variables with the dotenv package
require("dotenv").config();

// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
var request = require("request");

//Grab data from keys.js
var keys = require('./keys.js');
var request = require('request');
var twitter = require('twitter');
var spotify = require('spotify');
var client = new twitter(keys.twitterKeys);
var fs = require('fs');

//Node Argument
var action = process.argv[2];

//Switch Case
switch(action) {
    case "my-tweets":
        showTweets();
        break;
    case "spotify-this-song":
        //code block
        break;
    case "movie-this":
        //code block
        break;
    case "do-what-it-says":
        //code block
        break;
    default:
        //code block
}

//1. my-tweets
function showTweets(){

}

//2. spotify-this-song

//3. movie-this

//4. do-what-it-says