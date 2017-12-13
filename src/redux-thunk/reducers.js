import { combineReducers } from 'redux';
import * as Constants from './constants';

const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false
}

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case Constants.FETCHING_DATA:
      return {
        ...state,
        data: [],
        isFetching: true
      }
    case Constants.FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data
      }
    case Constants.FETCHING_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  dataReducer
});

export default rootReducer;