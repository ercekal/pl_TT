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

  handleDelete() {
    this.props.actions.deleteProduct(this.props.product.id)
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
            <table width="40%" style={{borderBottom: 'solid', borderColor: 'gray', borderWidth: 1}}>
              <tr>
                <td colspan="5" style={{paddingBottom: 5, paddingTop: 5}}>
                  <span style={{float: 'left'}}>{this.props.product.text}</span>
                  <span style={{float: "right"}}>&#163;{this.props.product.price}  {this.props.editMode && <a href="#" style={{fontSize: 14, textAlign: 'left'}} onClick={this.toggleEdit.bind(this)}>Edit</a>}</span>
                </td>
              </tr>
            </table>
          :
            <div>
              <ProductEdit
                product={this.props.product}
                editProduct={this.props.actions.editProduct}
                toggleShow={this.toggleEdit.bind(this)}
                update={this.props.update}
                discard={this.props.discard}
              />
              <Button onClick={this.handleDelete.bind(this)}>Delete product</Button>
            </div>
        }
      </div>
    )
  }
}

export default ProductItem
