import React, { Component } from 'react'
import ProductInput from './ProductInput'
import ProductList from './ProductList'
import Cart from './Cart'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'

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
      <div>
        <h1>Quote details</h1>
        {this.state.editMode ?
          <a href="#" onClick={this.editMode.bind(this)}>Cancel Quote</a>
          : <a href="#" onClick={this.editMode.bind(this)}>Amend Quote</a>}

        <ProductList actions={this.props.actions} products={this.props.products} editMode={this.state.editMode}/>
        <Cart products={this.props.products}/>
      </div>
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
