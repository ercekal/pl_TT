import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'

let initialState = {
  products: [
    {id: 0, text: "Tequila", price: 1200.00},
    {id: 1, text: "Salt", price: 12.00},
    {id: 2, text: "Lemon", price: 240.00},
    {id: 3, text: "Bartender", price: 345.60},
  ]
}

let store = configureStore(initialState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
