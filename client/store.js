import { createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import state from './State'
import rootReducers from './'

const store = createStore(
  rootReducers
)