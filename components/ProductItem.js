import React, { Component } from 'react'

class ProductItem extends Component {

  handleComplete() {
    this.props.actions.completeTodo(this.props.product.id)
  }

  handleDelete() {
    this.props.actions.deleteTodo(this.props.product.id)
  }

  render() {
    return (
      <li>
        <p>{this.props.product.text} - &#36;{this.props.product.price}</p>
        <button onClick={this.handleComplete.bind(this)}>Mark as completed</button>
        <button onClick={this.handleDelete.bind(this)}>Delete todo</button>
      </li>
    )
  }

}

export default ProductItem
