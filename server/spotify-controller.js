// todo: move this to a higher level file
require('dotenv').config();

var SpotifyWebApi = require('spotify-web-api-node');

// Retrieve an access token.
class SpotifyController {
  constructor () {
    this.spotifyApi = new SpotifyWebApi({
      clientId : process.env.SPOTIFY_CLIENT_ID,
      clientSecret : process.env.SPOTIFY_CLIENT_SECRET
    });

    this.spotifyApi.clientCredentialsGrant()
      .then((data) => {
        this.spotifyApi.setAccessToken(data.body['access_token']);
      }, (err) => {
        console.log('Something went wrong when retrieving an access token', err);
      });
  }

  getRelatedArtistTracks(req, res) {
    this.spotifyApi.searchArtists(req.params.artistName)
      .then((data) => {
        const artistId = data.body.artists.items[0].id
        return this.spotifyApi.getArtistRelatedArtists(artistId)
      })
      .then((data) => {
        const topTracks = data.body.artists.map(artist => this.spotifyApi.getArtistTopTracks(artist.id, 'GB'));
        return Promise.all(topTracks);
      }, (err) => {
        console.log('Error retrieving related artists', err);
      })
      .then(artists => {
        res.status(200);
        return res.json(artists.map(artist => {
          return { name: artist.body.tracks[0].artists[0].name, tracks: artist.body.tracks }
        }));
      })
  }

}

export default SpotifyController;
