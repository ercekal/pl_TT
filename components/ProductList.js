import React, { Component } from 'react'
import ProductItem from './ProductItem'
import ProductInput from './ProductInput'

class ProductList extends Component {
  constructor() {
    super()
    this.state = {
      showInput: false
    }
  }

  showInput() {
    this.setState({
      showInput: !this.state.showInput
    })
  }
  render() {

    return (
      <ul>
        {
          this.props.products.map((product) => {
            return <ProductItem key={product.id} product={product} actions={this.props.actions} editMode={this.props.editMode}/>
          })
        }
        { this.state.showInput ?
          <div>
            <ProductInput addProduct={this.props.actions.addProduct}/>
          </div>
          : "" }

        { this.props.editMode ? <button onClick={this.showInput.bind(this)}>+ Add quote item</button>
          : ""
        }
      </ul>
    )
  }
}

export default ProductList
