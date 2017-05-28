import { combineReducers } from 'redux';
import ProductReducer from './productReducer'
import ProductEditReducer from './productEditReducer'

const rootReducer = combineReducers({
  products: ProductReducer,
  productEdit: ProductEditReducer
})

export default rootReducer
