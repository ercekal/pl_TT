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
      <div>
        <div>
          <p>Plentific service fee is 10% of the total quote (ecl. VAT)</p>
          <p>A 20% deposit will be requested from the customer.</p>
        </div>
        <div>
          <Button onClick={this.props.discardChanges}>Discard changes</Button>
          <Button onClick={this.props.updateQuote}>Update</Button>
        </div>
      </div>
    )
  }
}

export default Update