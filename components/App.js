import React, { Component } from 'react'
import ProductInput from './ProductInput'
import ProductList from './ProductList'
import Cart from './Cart'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'

class App extends Component {

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <ProductInput addTodo={this.props.actions.addTodo}/>
        <ProductList actions={this.props.actions} products={this.props.products}/>
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
