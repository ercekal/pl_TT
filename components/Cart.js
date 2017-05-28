import React, { Component } from 'react'

class Cart extends Component {


  render() {
    const total = this.props.products.reduce(function (a,b) { return a + b.price; }, 0)

    return (
      <div>
        <p>Total (Excl. VAT): &#36;{Math.round(total / 1.2 *100)/100}</p>
        <p>VAT: &#36;{Math.round(total * 0.2 / 1.2 *100)/100}</p>
        <br/>
        <p>Total - {total}</p>
      </div>
    )
  }
}

export default Cart
