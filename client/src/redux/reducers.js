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
  const {payload, type } = action
  switch(type){
    case `GET_RUNS`: 
    return  {
      ...state,
      arr: payload,
      loading: false
    }
    default: return state
  }
}

export default combineReducers({
  test: testing,
  runs: getRuns
})