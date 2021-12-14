
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import cReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension'
const store = createStore(cReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;