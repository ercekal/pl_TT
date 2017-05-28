import React, { Component } from 'react';

export default class ProductEdit extends Component {

  constructor(props) {
    super(props)
    this.state = {
      inputText: props.product.text,
      inputPrice: props.product.price,
      show: false
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
    this.props.editProduct(this.props.product.id, this.state.inputText, this.state.inputPrice)
    this.setState({
      showEdit: !this.state.showEdit
    })
  }

  render() {
    return (
      <div>
        {this.state.showEdit ?
        "" :
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
        }
      </div>
    )
  }
}
