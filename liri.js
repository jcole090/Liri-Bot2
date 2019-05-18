require("dotenv").config();

var keys = require("./keys.js");

var axios = require('axios');

//var spotify = new Spotify(keys.spotify);



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

bandRequest("beatles") 

//"node liri.js concert-this <artist/band name here>"
//"https://rest.bandsintown.com/artists/" 