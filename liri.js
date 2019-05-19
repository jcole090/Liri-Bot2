require("dotenv").config();

var keys = require("./keys.js");

var axios = require('axios');

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify(keys.spotify);



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
  console.log(response);
})
.catch(function(err) {
  console.log(err);

});

songRequest("All the Small Things") 

//"node liri.js concert-this <artist/band name here>"
//"https://rest.bandsintown.com/artists/" 