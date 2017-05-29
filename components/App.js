import React, { Component } from 'react'
import ProductInput from './ProductInput'
import ProductList from './ProductList'
import Cart from './Cart'
import Update from './Update'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'
import {Grid, Col, Row} from 'react-bootstrap'

class App extends Component {
  constructor() {
      super()
      this.state = {
        editMode: false,
        update: false,
        discard: false
      }
    }

  editMode() {
    this.setState({
      editMode: !this.state.editMode
    })
  }

  discardChanges() {
    this.setState({
      discard: !this.state.discard
    })
  }

  updateQuote() {
    this.setState({
      update: !this.state.update
    })
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          {
            this.state.editMode ?
            <h3>Update quote <a href="#" style={{fontSize: 14, color: 'red'}} onClick={this.props.actions.cancelQuote}>Cancel Quote</a></h3>:
            <h3>Quote details <a href="#" style={{fontSize: 14}} onClick={this.editMode.bind(this)}>Amend Quote</a></h3>
          }
        </Row>
        <Row className="show-grid">
          <ProductList
            actions={this.props.actions}
            products={this.props.products}
            editMode={this.state.editMode}
            update={this.state.update}
            discard={this.state.discard}
          />
        </Row>
        <Row className="show-grid">
          <Cart products={this.props.products}/>
        </Row>
        {
          this.state.editMode &&
          <Row className="show-grid">
            <Update
              discardChanges={this.editMode.bind(this)}
              updateQuote={this.updateQuote.bind(this)}
              products={this.props.products}
            />
          </Row>
        }
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
