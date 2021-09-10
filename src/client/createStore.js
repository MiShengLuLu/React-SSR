import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../share/store/reducers'

export default createStore(reducer, window.INITIAL_STATE, applyMiddleware(thunk))
