//Set environment variables with the dotenv package
require("dotenv").config();

// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
var request = require("request");

//Grab data from keys.js
var keys = require('./keys.js');

//Required Twitter API & Keys
var Twitter = require('twitter');
var twitterKeys = keys.twitter;

//Required Spotify API & Keys
var spotify = require('spotify');
var spotKeys = keys.spotify;

var fs = require('fs');

// Input Argument
var command = process.argv[2];
var input = process.argv[3]; //song or movie input

//Switch Case
switch(command) {
    case "my-tweets":
        showTweets();
        break;
    case "spotify-this-song":
        spotSong(input);
        break;
    case "movie-this":
        if (input ==="undefined") {
            showMovie('Mr. Nobody');
        } else {
            showMovie(input)
        }
        break;
    case "do-what-it-says":
        //code block
        break;
    default:
        console.log("Try again, wrong command has been enter.");
}

//1. my-tweets
function showTweets(){
    var client = new Twitter({
        twitterKeys
    });

    var params = {screen_name: 'alljones', count: 20,};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        console.log(response.created_at);
        console.log(tweets);
        console.log("- - - - - - - - - - - - -");
    } else{
        console.log(error);
    }
});

//2. spotify-this-song
function spotSong(song){

}

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
  } else {
    console.log("Something");
  };
});


};
//4. do-what-it-says
};