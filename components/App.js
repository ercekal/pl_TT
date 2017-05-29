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
      editMode: true,
      update: false,
      discard: false
    })
  }

  discardChanges() {
    this.setState({
      editMode: false,
      update: false,
      discard: true
    })
  }

  updateQuote() {
    this.setState({
      editMode: false,
      update: true,
      discard: false
    })
  }

  render() {
    return (
      <Grid style={{paddingTop: 20}}>
        <Row className="show-grid">
          <table width="40%">
            <tr>
              <td colspan="5">
                {
                  this.state.editMode ?
                    <div>
                      <span style={{float: 'left'}}><p style={{fontSize: 18}}>Update quote</p></span>
                      <span style={{float: "right"}}><a href="#" style={{fontSize: 14, color: 'red'}} onClick={this.props.actions.cancelQuote}>Cancel Quote</a></span>
                    </div> :
                    <div>
                      <span style={{float: 'left'}}><p style={{fontSize: 18}}>Update quote</p></span>
                      <span style={{float: "right"}}><a href="#" style={{fontSize: 14}} onClick={this.editMode.bind(this)}>Amend Quote</a></span>
                    </div>
                }
              </td>
            </tr>
          </table>
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
              discardChanges={this.discardChanges.bind(this)}
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
