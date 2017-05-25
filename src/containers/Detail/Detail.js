import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {load} from 'redux/modules/detail';
import {asyncConnect} from 'redux-async-connect';
import {Image} from 'react-bootstrap';

@asyncConnect([{
  deferred: true,
  promise: ({store: {dispatch}}) => {
    // Cu vao trang la load
    return dispatch(load());
  }
}])

@connect(
  state => ({product: state.detail.data}) // Xu ly cai product replace cho cai detail la mao hiem.
)

export default class Detail extends Component {
  static propTypes = {
    product: PropTypes.object,
    load: PropTypes.func.isRequired
  }
  render() {
    const {product} = this.props; // eslint-disable-line no-shadow
    return (
      <div className="container">
        {product &&
        <div>
          <Image src={product.image[0].large_image} thumbnail />
          <h1>{product.name}</h1>
        </div>}
      </div>
    );
  }
}
