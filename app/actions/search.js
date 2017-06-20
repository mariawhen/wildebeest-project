import 'whatwg-fetch';
import * as types from '../types'

export function searchArtist(artist) {
  return (dispatch, getState) => {
    return fetch(`http://localhost:3000/artists/${artist}/related`)
      .then(response => response.json())
      .then(json => dispatch(fetchRelatedArtistSuccess(json)));
  }
}

function fetchRelatedArtistSuccess(relatedArtists) {
  return {
    type: types.FETCH_RELATED_ARTIST_SUCCESS,
    payload: relatedArtists
  }
}