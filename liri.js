require("dotenv").config();

var keys = require("./keys.js");

var axios = require('axios');

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify(keys.spotify);

var input = process.argv;
var songName = input[2];

const movieRequest = title => axios.get(`http://www.omdbapi.com/?apikey=${process.env.OMDB_KEY}&t=${title}`)
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});

//movieRequest("blade")

const bandRequest = artist => axios.get(`https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`)
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});

//bandRequest("beatles") 

const songRequest = song => spotify
.search({ type: 'track', query: song})
.then(function(response) {
    //set the array of response items
    var resArr = response.tracks.items;

    //set an empty artist Array to push into
    var artistArray = [];

    //loop through each response item and push to the artist Array
    resArr.forEach(item => {
         artistArray.push(item.artists);
    })

    //Log the first result
    console.log(artistArray[0])
})
.catch(function(err) {
  console.log(err);

});

songRequest(songName) 

//"node liri.js concert-this <artist/band name here>"
//"https://rest.bandsintown.com/artists/" 