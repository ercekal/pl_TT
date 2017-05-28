import React, { Component } from 'react'
import ProductItem from './ProductItem'

class ProductList extends Component {

  render() {
    return (
      <ul>
        {
          this.props.products.map((product) => {
            return <ProductItem key={product.id} product={product} actions={this.props.actions}/>
          })
        }
      </ul>
    )
  }
}

export default ProductList
