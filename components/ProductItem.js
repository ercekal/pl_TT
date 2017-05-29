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
            <div>
              <p>
                {this.props.product.text} - &#163;{this.props.product.price}
                {this.props.editMode && <a href="#" style={{fontSize: 14}} onClick={this.toggleEdit.bind(this)}>Edit</a>}
              </p>
            </div>
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
