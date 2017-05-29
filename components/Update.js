import React, { Component } from 'react'
import {Grid, Col, Row, Button} from 'react-bootstrap'

class Update extends Component {
  constructor() {
    super()
    this.state = {
      discard: false,
      update: false
    }
  }

  render() {

    return (
      <div style={{width: "50%", paddingTop: 20}}>
        <div>
          <p style={{fontSize: 12, display: 'flex', justifyContent: 'center'}}>Plentific service fee is 10% of the total quote (ecl. VAT)</p>
          <p style={{fontSize: 12, display: 'flex', justifyContent: 'center'}}>A 20% deposit will be requested from the customer.</p>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', paddingTop: 20}}>
          <a href="#" style={{color: "gray", paddingRight: 50}}onClick={this.props.discardChanges}>Discard changes</a>
          <Button bsStyle="primary"  onClick={this.props.updateQuote}>Update</Button>
        </div>
      </div>
    )
  }
}

export default Update
