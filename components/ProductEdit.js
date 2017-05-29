import React, { Component } from 'react';

export default class ProductEdit extends Component {

  constructor(props) {
    super(props)
    this.state = {
      inputText: props.product.text,
      inputPrice: props.product.price,
      show: false,
      update: false
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.update === true && this.state.update === false) {
      this.handleSubmit()
    } else if (nextProps.discard === true) {
      this.props.toggleShow()
      this.setState({
        update: false
      })
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
    this.props.editProduct(this.props.product.id, this.state.inputText, this.state.inputPrice)
    this.setState({
      update: true
    })
    this.props.toggleShow()
  }

  render() {
    return (
      <div>
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
      </div>
    )
  }
}
