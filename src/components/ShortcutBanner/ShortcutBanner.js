import React, {Component} from 'react';
import {Grid, Row, Col } from 'react-bootstrap';

export default class ShortcutBanner extends Component {

  render() {
    const lists = [
      {
        title: 'Danh mục',
        icon: ''
      },
      {
        title: 'Xu hướng',
        icon: ''
      },
      {
        title: 'Khuyến mãi',
        icon: ''
      },
      {
        title: 'Bán chạy',
        icon: ''
      }
    ];
    return (
      <div>
        {lists && lists.length &&
          <Grid>
            <Row className="show-grid">
            {lists.map((item) => (
              <Col xs={3}>{item.title}</Col>
            ))}
            </Row>
          </Grid>
        }
      </div>
    );
  }
}

