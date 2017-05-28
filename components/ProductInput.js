import React, { Component } from 'react'
import { connect } from 'react-redux';
import { editProduct } from '../redux/actions'

class ProductInput extends Component {

  handleNameChange(event) {
    this.setState({
      inputText: event.target.value
    })
  }

  handlePriceChange(event) {
    this.setState({
      inputPrice: parseInt(event.target.value)
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    this.props.addProduct(this.state.inputText, this.state.inputPrice)
    this.setState({
      inputText: '',
      inputPrice: ''
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
            onChange={value => { this.props.editProduct({ prop: 'text', value}) }}
          />
          <input
            type="text"
            placeholder="Product price"
            value={this.props.price}
            onChangeText={value => { this.props.editProduct({ prop: 'price', value}) }}
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

export default connect(mapStateToProps, {editProduct})(ProductInput)
