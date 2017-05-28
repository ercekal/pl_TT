import _ from 'lodash';
import React, { Component } from 'react';
import ProductInput from './ProductInput'
import { editProduct, updateProduct } from '../redux/actions'
import { connect } from 'react-redux';

class ProductEdit extends Component {

  componentWillMount() {
    _.each(this.props.product, (value, prop) => {
      this.props.updateProduct({ prop, value })
    })
  }

  handleSubmit() {
    this.props.editProduct(this.props.product.id, this.props.text, this.props.price)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            placeholder="Product name"
            value={this.props.text}
            onChange={value => { this.props.updateProduct({ prop: 'text', value}) }}
          />
          <input
            type="text"
            placeholder="Product price"
            value={this.props.value}
            onChangeText={value => { this.props.updateProduct({ prop: 'price', value}) }}
          />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { text, price } = state.productEdit
  return { text, price }
}

export default connect(mapStateToProps, {updateProduct, editProduct})(ProductEdit)
