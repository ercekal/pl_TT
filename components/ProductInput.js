import React, { Component } from 'react'

class ProductInput extends Component {

  constructor() {
    super()
    this.state = {
      inputText: '',
      inputPrice: ''
    }
  }

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
            value={this.state.inputText}
            onChange={this.handleNameChange.bind(this)}
          />
          <input
            type="text"
            placeholder="Product price"
            value={this.state.inputPrice}
            onChange={this.handlePriceChange.bind(this)}
          />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default ProductInput
