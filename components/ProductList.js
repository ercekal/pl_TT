import React, { Component } from 'react'
import ProductItem from './ProductItem'
import ProductInput from './ProductInput'
import {Grid, Col, Row, Button} from 'react-bootstrap'

class ProductList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showInput: props.editMode
    }
  }

  showInput() {
    this.setState({
      showInput: !this.state.showInput
    })
  }
  render() {

    return (
      <Grid>
        <Row>
          {
            this.props.products.map((product) => {
              return <ProductItem key={product.id} product={product} actions={this.props.actions} editMode={this.props.editMode} update={this.props.update} discard={this.props.discard}/>
            })
          }
        </Row>
        <Row>
          {
            this.state.showInput &&
            <div>
              <ProductInput addProduct={this.props.actions.addProduct}/>
            </div>
          }
        </Row>
        {
          this.props.editMode &&
          <a href="#" onClick={this.showInput.bind(this)}>+ Add quote item</a>
        }
      </Grid>
    )
  }
}

export default ProductList
