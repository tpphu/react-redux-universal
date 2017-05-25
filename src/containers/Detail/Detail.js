import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {isLoaded, load} from 'redux/modules/detail';
import {asyncConnect} from 'redux-async-connect';

import Helmet from 'react-helmet';
import { InfoBar } from 'components';

@asyncConnect([{
  deferred: true,
  promise: ({store: {dispatch, getState}}) => {
    if (!isLoaded(getState())) {
      return dispatch(load());
    }
  }
}])

@connect(
  state => ({detail: state.detail.data})
)

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
        <InfoBar/>
        <p>{detail ? detail.cat_path : 'n/a'}</p>
        <Helmet title="Detail"/>
      </div>
    );
  }
}
