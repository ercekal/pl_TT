import React from 'react'

const Cart = (props) => {

  const total = props.products.reduce(function (a,b) { return a + b.price; }, 0)

  return (
    <div>
      <table width="50%">
        <tbody>
          <tr>
            <td style={{paddingBottom: 10, paddingTop: 10}}>
              <span style={{float: 'left'}}><b>Total (Excl. VAT):</b></span>
              <span style={{float: "right"}}>&#163;{Math.round(total / 1.2 *100/100).toFixed(2)}</span>
            </td>
          </tr>
          <tr style={{borderBottom: 'solid', borderColor: 'gray', borderWidth: 1}}>
            <td style={{paddingBottom: 10}}>
              <span style={{float: 'left'}}><b>VAT:</b></span>
              <span style={{float: "right"}}>&#163;{Math.round(total * 0.2 / 1.2 *100/100).toFixed(2)}</span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{float: 'left', paddingTop: 5}}><b>Total (Incl. VAT):</b></span>
              <span style={{float: "right", color: 'blue'}}>&#163;<span style={{fontSize: 25, color: 'blue'}}>{Math.round(total).toFixed(2)}</span></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Cart
