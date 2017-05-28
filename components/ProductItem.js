import React, { Component } from 'react'
import ProductEdit from './ProductEdit'

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
    console.log('hello');
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <li>
        {this.state.show ?
          <div>
            <p>{this.props.product.text} - &#36;{this.props.product.price}</p>
            {this.props.editMode ? <button onClick={this.toggleEdit.bind(this)}>Edit product</button> : ""}
          </div>
          :
          <div>
            <ProductEdit
              product={this.props.product}
              editProduct={this.props.actions.editProduct}
              toggleShow={this.toggleEdit.bind(this)}
            />
            <button onClick={this.toggleEdit.bind(this)}>Save changes</button>
            <button onClick={this.handleDelete.bind(this)}>Delete product</button>
          </div>
        }
      </li>
    )
  }
}

export default ProductItem
