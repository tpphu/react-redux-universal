import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {load} from 'redux/modules/detail';

import Helmet from 'react-helmet';

@connect(
    state => ({detail: state.detail.data}),
    dispatch => bindActionCreators({load}, dispatch))

export default class Detail extends Component {
  static propTypes = {
    detail: PropTypes.object,
    load: PropTypes.func.isRequired
  }
  render() {
    const {detail} = this.props; // eslint-disable-line no-shadow
    return (
      <div className="container">
        <h1>Detail Product</h1>
        <p>{detail ? detail.cat_path : 'n/a'}</p>
        <Helmet title="Detail"/>
      </div>
    );
  }
}
