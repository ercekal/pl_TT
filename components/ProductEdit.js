import _ from 'lodash';
import React, { Component } from 'react';
import ProductInput from './ProductInput'
import { editProduct } from '../redux/actions'
import { connect } from 'react-redux';

class ProductEdit extends Component {

  componentWillMount() {
    _.each(this.props.product, (value, prop) => {
      this.props.editProduct(this.props.product.id, { prop, value })
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            placeholder="Product name"
            value={this.props.text}
            onChange={this.handleNameChange.bind(this)}
          />
          <input
            type="text"
            placeholder="Product price"
            value={this.props.value}
            onChange={this.handlePriceChange.bind(this)}
          />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  const { text, price } = state.products
  return { text, price }
}

export default connect(mapStateToProps, {editProduct})(ProductEdit)
