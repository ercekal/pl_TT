import React, { Component } from 'react'

class Cart extends Component {
  render() {
    return (
      <ul>
        {
          this.props.products.reduce(function (a,b) { return a + b.price; }, 0)
              }
      </ul>
    )
  }
}

export default Cart
