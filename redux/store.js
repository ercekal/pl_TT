import { applyMiddleware, compose, createStore } from 'redux'
import rootReducers from '../reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

let finalCreateStore = compose(
  applyMiddleware(thunk, logger())
)(createStore)


export default function configureStore(initialState = { products: [], productEdit: {} }) {
  return finalCreateStore(rootReducers, initialState)
}
