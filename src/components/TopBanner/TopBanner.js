import React, {Component} from 'react';
import {Carousel } from 'react-bootstrap';

export default class TopBanner extends Component {

  render() {
    const lists = [
      {
        title: 'First slide label',
        image: 'https://media3.scdn.vn/img2/2016/12_29/T2u6rn_simg_39333c_560x230_maxb.png',
        description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
      },
      {
        title: 'Second slide label',
        image: 'https://media3.scdn.vn/img2/2017/1_6/SkhTts_simg_39333c_560x230_maxb.png',
        description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
      },
      {
        title: 'Third slide label',
        image: 'https://media3.scdn.vn/img2/2016/12_29/rFsy8c_simg_39333c_560x230_maxb.jpg',
        description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
      }
    ];
    return (
      <div>
        {lists && lists.length &&
          <Carousel>
            {lists.map((item) => (
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src={item.image}/>
                <Carousel.Caption>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        }
      </div>
    );
  }
}

