import React, { Component } from 'react'
import ProductEdit from './ProductEdit'
import {Grid, Col, Row, Button} from 'react-bootstrap'

class ProductItem extends Component {
  constructor() {
    super()
    this.state = {
      show: true
    }
  }

  toggleEdit() {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <div>
        {
          this.state.show ?
            <table width="50%" style={{borderBottom: 'solid', borderColor: 'gray', borderWidth: 1}}>
              <tbody>
                <tr>
                  <td style={{paddingBottom: 5, paddingTop: 5}}>
                    <span style={{float: 'left'}}>{this.props.product.text}</span>
                    <span style={{float: "right"}}>&#163;{this.props.product.price.toFixed(2)}  {this.props.editMode && <a href="#" style={{fontSize: 14, textAlign: 'left'}} onClick={this.toggleEdit.bind(this)}>Edit</a>}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          :
            <div>
              <ProductEdit
                product={this.props.product}
                editProduct={this.props.actions.editProduct}
                toggleShow={this.toggleEdit.bind(this)}
                update={this.props.update}
                discard={this.props.discard}
                actions={this.props.actions}
              />
            </div>
        }
      </div>
    )
  }
}

export default ProductItem
