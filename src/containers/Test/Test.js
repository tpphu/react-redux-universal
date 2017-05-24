import React, {Component} from 'react';
import Helmet from 'react-helmet';
const ip = require('ip').address();
const now = new Date().toISOString();

export default class Test extends Component {

  state = {
    ip: ip,
    now: now
  }

  render() {
    return (
      <div className="container">
        <h1>Test Us</h1>
        <h2>Your ip is: {this.state.ip}</h2>
        <h3>Server time is: {this.state.now}</h3>
        <Helmet title="Test Us"/>
      </div>
    );
  }
}
