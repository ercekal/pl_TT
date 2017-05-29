import React, { Component } from 'react'
import ProductEdit from './ProductEdit'
import {Grid, Col, Row, Button, Table} from 'react-bootstrap'

class ProductItem extends Component {
  constructor() {
    super()
    this.state = {
      show: true
    }
  }

  handleDelete() {
    this.props.actions.deleteProduct(this.props.product.id)
  }

  toggleEdit() {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <div>
        {
          this.state.show ?
            <Table style={{width: %60}} >
              <tbody>
                <tr>
                  <td>{this.props.product.text}</td>
                  <td style={{textAlign: 'right'}} >&#163;{this.props.product.price}</td>
                  {this.props.editMode && <td><a href="#" style={{fontSize: 14, textAlign: 'left'}} onClick={this.toggleEdit.bind(this)}>Edit</a></td>}
                </tr>
              </tbody>
            </Table>
          :
            <div>
              <ProductEdit
                product={this.props.product}
                editProduct={this.props.actions.editProduct}
                toggleShow={this.toggleEdit.bind(this)}
                update={this.props.update}
                discard={this.props.discard}
              />
              <Button onClick={this.handleDelete.bind(this)}>Delete product</Button>
            </div>
        }
      </div>
    )
  }
}

export default ProductItem
