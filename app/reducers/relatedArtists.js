import { searchArtist } from '../actions/search';
import * as types from '../types'

export default function (state = [], action) {
  switch (action.type) {
    case types.FETCH_RELATED_ARTIST_SUCCESS :
      return action.payload
    default:
      return state
  }
}