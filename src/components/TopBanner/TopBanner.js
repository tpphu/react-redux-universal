import React, {Component} from 'react';
import {Carousel } from 'react-bootstrap';

export default class TopBanner extends Component {

  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="https://media3.scdn.vn/img2/2016/12_29/T2u6rn_simg_39333c_560x230_maxb.png"/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="https://media3.scdn.vn/img2/2017/1_6/SkhTts_simg_39333c_560x230_maxb.png"/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="https://media3.scdn.vn/img2/2016/12_29/rFsy8c_simg_39333c_560x230_maxb.jpg"/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

