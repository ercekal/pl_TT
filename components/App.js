import React, { Component } from 'react'
import ProductInput from './ProductInput'
import ProductList from './ProductList'
import Cart from './Cart'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'
import {Grid, Col, Row} from 'react-bootstrap'

class App extends Component {
  constructor() {
      super()
      this.state = {
        editMode: false
      }
    }

  editMode() {
    this.setState({
      editMode: !this.state.editMode
    })
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col md={6} mdPull={6}><h1>Quote details</h1></Col>
          <Col md={6} mdPush={6}>
            {
              this.state.editMode ?
              <a href="#" onClick={this.props.actions.cancelQuote}>Cancel Quote</a> :
              <a href="#" onClick={this.editMode.bind(this)}>Amend Quote</a>
            }
          </Col>
        </Row>
        <Row className="show-grid">
          <ProductList actions={this.props.actions} products={this.props.products} editMode={this.state.editMode}/>
        </Row>
        <Row className="show-grid">
          <Cart products={this.props.products}/>
        </Row>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
