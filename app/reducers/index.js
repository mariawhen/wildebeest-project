import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import relatedArtists from '../reducers/relatedArtists';
// import * as types from '../types';

// const isFetching = (state = false, action) => {
//   switch (action.type) {
//     case types.CREATE_REQUEST:
//       return true;
//     case types.REQUEST_SUCCESS:
//     case types.REQUEST_FAILURE:
//       return false;
//     default:
//       return state;
//   }
// };

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
  relatedArtists,
  routing
});

export default rootReducer;
