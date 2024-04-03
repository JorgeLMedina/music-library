const library = {
       tracks: {
              t01: {
                     id: "t01",
                     name: "Code Monkey",
                     artist: "Jonathan Coulton",
                     album: "Thing a Week Three"
              },
              t02: {
                     id: "t02",
                     name: "Model View Controller",
                     artist: "James Dempsey",
                     album: "WWDC 2003"
              },
              t03: {
                     id: "t03",
                     name: "Four Thirty-Three",
                     artist: "John Cage",
                     album: "Woodstock 1952"
              }
       },
       playlists: {
              p01: {
                     id: "p01",
                     name: "Coding Music",
                     tracks: ["t01", "t02"]
              },
              p02: {
                     id: "p02",
                     name: "Other Playlist",
                     tracks: ["t03"]
              }
       }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function (obj) {
       for (let key in obj.playlists) {
              const playlist = obj.playlists[key];
              console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
       }
};

// printPlaylists(library);


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function (obj) {
       for (let key in obj.tracks) {
              const track = obj.tracks[key];
              console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`)
       }
};

// printTracks(library);


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function (playlistId) {
       const idString = playlistId.toString();
       if (idString[0] === "p") {
              const idLibrary = library.playlists[playlistId];
              console.log(`${idLibrary.id}: ${idLibrary.name} - ${idLibrary.tracks.length} tracks`);
       } else if (idString[0] === "t") {
              const idTracks = library.tracks[playlistId];
              console.log(`${idTracks.id}: ${idTracks.name} by ${idTracks.artist} (${idTracks.album})`);
       } else {
              console.log("Invalid track ID, it should start with a 'p' or a 't' followed \nby its assigned number (p01, p02, p03 or t01, t02 and so on).")
       }
};

// printPlaylist("p01");
// printPlaylist("t01");
// printPlaylist("t02");

// adds an existing track to an existing playlist
const addTrackToPlaylist = function (trackId, playlistId) {
       library.playlists[playlistId].tracks.push(trackId);
};

// console.log(library.playlists.p01);
// addTrackToPlaylist("t04", "p01");
// console.log(library.playlists.p01);
// console.log(library.playlists.p02);
// addTrackToPlaylist("t05", "p02");
// console.log(library.playlists.p02);


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function () {
       return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

// console.log(generateUid());
// console.log(generateUid());
// console.log(generateUid());
// console.log(generateUid());
// console.log(generateUid());
// console.log(generateUid());
// console.log(generateUid());
// console.log(generateUid());

// adds a track to the library
const addTrack = function (name, artist, album) {
       const newTrackId = "t" + generateUid();
       library.tracks[newTrackId] = {
              id: newTrackId,
              name: name,
              artist: artist,
              album: album
       }
};

// console.log(`Original object

// ------------------------------`);
// console.log(library.tracks);
// addTrack("American Idiot", "Green Day", "American Idiot");
// console.log(`Add 1

// ------------------------------`);
// console.log(library.tracks);
// addTrack("Enter sandman", "Metallica", "Black Album");
// console.log(`Add 2

// ------------------------------`);
// console.log(library.tracks);

// adds a playlist to the library
const addPlaylist = function (name) {
       const newTrackId = "p" + generateUid();
       library.playlists[newTrackId] = {
              id: newTrackId,
              name: name,
              tracks: []
       }
};

// console.log(`Original object

// ------------------------------`);
// console.log(library.playlists);
// addPlaylist("Oldies");
// console.log(`Add 1

// ------------------------------`);
// console.log(library.playlists);
// addPlaylist("Powerhits!");
// console.log(`Add 2

// ------------------------------`);
// console.log(library.playlists);

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
const printSearchResults = function (query) {
       for (const key in library.tracks) {
              const keyQuery = library.tracks[key];
              if (Object.values(keyQuery).includes(query)) {
                     console.log(`${keyQuery}: ${keyQuery.name} by ${keyQuery.artist} (${keyQuery.album})`);
              }
       }

};

// console.log(printSearchResults("View"));
// console.log(printSearchResults("Co"));
// console.log(printSearchResults("Three"));

/////////////////
// TEST 
/////////////////

// module.exports = { library, printPlaylists };