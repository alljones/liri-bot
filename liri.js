//Set environment variables with the dotenv package
require("dotenv").config();

// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
var request = require("request");

//Grab data from keys.js
var keys = require('./keys.js');
var twitter = require('twitter');
var spotify = require('spotify');
var fs = require('fs');
var client = new Twitter({

  });

// Input Argument
var action = process.argv[2];
var input = process.argv[3]; //song or movie input

//Switch Case
switch(action) {
    case "my-tweets":
        showTweets();
        break;
    case "spotify-this-song":
        //code block
        break;
    case "movie-this":
        showMovie();
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
function showMovie(movie) {

var omdbUrl = "http://www.omdbapi.com/?t=" + movie + "&plot=short&apikey=trilogy";

request(omdbUrl, function(error, response, body) {

  // If there were no errors and the response code was 200 (i.e. the request was successful)...
  if (!error && response.statusCode === 200) {
    var body = JSON.parse(body);
    // Then we print out the imdbRating
    console.log('MOVIE SEARCH - - - - - - - - - - -');
    console.log(`Title: ${body.Title}`);
    console.log(`Year Released: ${body.Year}`);
    console.log(`IMBD Rating: ${body.imdbRating}`);
    console.log(`Rotten Tomatoes Rating: ${body.Rating[1].Value}`);
    console.log(`Language: ${body.Language}`);
    console.log(`Movie Plot: ${body.Plot}`);
    console.log(`Actor(s): ${body.Actors}`);
    console.log('- - - - - - - - - - - - - - - - -');
  }
});


};
//4. do-what-it-says