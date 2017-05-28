import React, { Component } from 'react'
import ProductEdit from './ProductEdit'
import actions from '../redux/actions'

class ProductItem extends Component {
  constructor() {
      super()
      this.state = {
        show: true
      }
    }

  showEdit() {
    this.setState({
      show: false
    })
  }

  handleComplete() {
    this.props.actions.completeTodo(this.props.product.id)
  }

  handleDelete() {
    this.props.actions.deleteTodo(this.props.product.id)
  }

  render() {
    return (

      <li>
        {this.state.show ?
          <div>
            <p>{this.props.product.text} - &#36;{this.props.product.price}</p>
            <button onClick={this.showEdit.bind(this)}>Edit</button>
          </div>
          :
          <div>
            <ProductEdit
              editProduct={this.props.actions.editProduct}
              product={this.props.product}
            />
            <button onClick={this.handleComplete.bind(this)}>Mark as completed</button>
            <button onClick={this.handleDelete.bind(this)}>Delete todo</button>
          </div>
          }
      </li>
    )
  }

}

export default ProductItem
