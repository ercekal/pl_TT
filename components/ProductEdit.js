import React, { Component } from 'react';

export default class ProductEdit extends Component {

  constructor(props) {
    super(props)
    this.state = {
      inputText: props.product.text,
      inputPrice: props.product.price,
      update: false
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.update === true && this.state.update === false) {
      this.handleUpdate()
    } else if (nextProps.discard === true) {
      this.handleDiscard()
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

  handleUpdate() {
    this.props.editProduct(this.props.product.id, this.state.inputText, this.state.inputPrice)
    this.setState({
      update: true
    })
    this.props.toggleShow()
  }

  handleDiscard() {
    this.props.toggleShow()
    this.setState({
      update: false
    })
  }

  handleDelete() {
    this.props.actions.deleteProduct(this.props.product.id)
  }

  render() {
    return (
      <div>
        <table width="50%" style={{borderBottom: 'solid', borderColor: 'gray', borderWidth: 1}}>
          <tbody>
            <tr>
              <td style={{paddingBottom: 5, paddingTop: 5}}>
                <span style={{float: 'left'}}>
                  <input
                    type="text"
                    placeholder="Product name"
                    value={this.state.inputText}
                    onChange={this.handleNameChange.bind(this)}
                  />
                </span>
                <span style={{float: "right"}}>
                  <input
                    type="text"
                    placeholder="Product price"
                    value={this.state.inputPrice}
                    onChange={this.handlePriceChange.bind(this)}
                  />
                  <a href="#" style={{color: 'red'}} onClick={this.handleDelete.bind(this)}>Delete</a>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
