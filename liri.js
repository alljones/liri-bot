//Set environment variables with the dotenv package
require("dotenv").config();

// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
var request = require("request");

//Grab data from keys.js
var keys = require('./keys.js');
var request = require('request');
var twitter = require('twitter');
var spotify = require('spotify');
var fs = require('fs');
var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });

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
        console.log("Try again, wrong command has been enter.");
}

//1. my-tweets
function showTweets(){

}

//2. spotify-this-song

//3. movie-this

//4. do-what-it-says