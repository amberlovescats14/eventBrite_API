import {combineReducers} from 'redux'

const testing = (state = '', action) => {
  switch(action.type){
    default: return state
  }
}

const runInitialState = {
  arr: [],
  loading: true
}


export const getRuns = (state = runInitialState, action ) => {
  switch(action.type){
    case `GET_RUNS`: 
    return  {
      ...state,
      arr: action.payload,
      loading: false
    }
    default: return state
  }
}

const yelpInitialState = {
  arr: [],
  loading: true
}

export const getSearchItems = (state = yelpInitialState, action) => {
  switch(action.type){
    case `GET_YELP`:
    return {
      ...state,
      arr: action.payload,
      loading: false
    };
    default: return state
  }
}

export default combineReducers({
  test: testing,
  runs: getRuns,
  yelp: getSearchItems
})