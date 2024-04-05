// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function () {
       return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};

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
       },
       // Methods

       // prints a list of all playlists, in the form:
       // p01: Coding Music - 2 tracks
       // p02: Other Playlist - 1 tracks
       printPlaylists: function () {
              for (let key in this.playlists) {
                     const playlist = this.playlists[key];
                     console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
              }
       },

       // prints a list of all tracks, using the following format:
       // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
       // t02: Model View Controller by James Dempsey (WWDC 2003)
       // t03: Four Thirty-Three by John Cage (Woodstock 1952)
       printTracks: function () {
              for (let key in this.tracks) {
                     const track = this.tracks[key];
                     console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`)
              }
       },

       // prints a list of tracks for a given playlist, using the following format:
       // p01: Coding Music - 2 tracks
       // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
       // t02: Model View Controller by James Dempsey (WWDC 2003)
       printPlaylist: function (playlistId) {
              const idString = playlistId.toString();
              if (idString[0] === "p") {
                     const idLibrary = this.playlists[playlistId];
                     console.log(`${idLibrary.id}: ${idLibrary.name} - ${idLibrary.tracks.length} tracks`);
              } else if (idString[0] === "t") {
                     const idTracks = this.tracks[playlistId];
                     console.log(`${idTracks.id}: ${idTracks.name} by ${idTracks.artist} (${idTracks.album})`);
              } else {
                     console.log("Invalid track ID, it should start with a 'p' or a 't' followed \nby its assigned number (p01, p02, p03 or t01, t02 and so on).")
              }
       },

       // adds an existing track to an existing playlist
       addTrackToPlaylist: function (trackId, playlistId) {
              this.playlists[playlistId].tracks.push(trackId);
       },

       // adds a track to the library
       addTrack: function (name, artist, album) {
              const newTrackId = "t" + generateUid();
              this.tracks[newTrackId] = {
                     id: newTrackId,
                     name: name,
                     artist: artist,
                     album: album
              }
       },

       // adds a playlist to the library
       addPlaylist: function (name) {
              const newTrackId = "p" + generateUid();
              this.playlists[newTrackId] = {
                     id: newTrackId,
                     name: name,
                     tracks: []
              }
       },

       // STRETCH:
       // given a query string string, prints a list of tracks
       // where the name, artist or album contains the query string (case insensitive)
       // tip: use "string".search("tri") 
       // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
       printSearchResults: function (query) {
              const keyArr = [];
              for (const key in this.tracks) {
                     const keyQuery = this.tracks[key];
                     const newArr = this.values(keyQuery).filter(value => {
                            return value.search(query) !== -1;
                     });
                     if (newArr.length !== 0) {
                            keyArr.push(key);
                     }
              }
              for (const song of keyArr) {
                     const keyQuery = this.tracks[song];
                     console.log(`${song}: ${keyQuery.name} by ${keyQuery.artist} (${keyQuery.album})`);
              }

       }
};

library.printPlaylists();
library.printTracks();
library.printPlaylists("p02");
library.addTrackToPlaylist("t04", "p01");
library.addTrack("American Idiot", "Green Day", "American Idiot");
library.addPlaylist("Oldies");
library.printSearchResults("Three");