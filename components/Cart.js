import React from 'react'

const Cart = (props) => {

  const total = props.products.reduce(function (a,b) { return a + b.price; }, 0)

  return (
    <div>
      <p><b>Total (Excl. VAT):</b> &#163;{Math.round(total / 1.2 *100)/100}</p>
      <p><b>VAT:</b> &#163;{Math.round(total * 0.2 / 1.2 *100)/100}</p>
      <br/>
      <p><b>Total (Excl. VAT):</b> &#163;{total}</p>
    </div>
  )
}

export default Cart
