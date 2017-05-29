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
                <a href="#" style={{color: 'blue', paddingRight: 10}} onClick={this.handleSubmit.bind(this)}>Save</a>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default ProductInput
