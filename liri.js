require("dotenv").config();

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

"node liri.js concert-this <artist/band name here>"
"https://rest.bandsintown.com/artists/" + ar