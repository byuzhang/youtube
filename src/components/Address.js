import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Address = (props) => {
  return (
    <Row bsClass="row footer">
      <Col md={5}>
        Created by <a href="https://byuzhang.github.io/me/" target="_blank">Bingyu Zhang</a>
      </Col>
      <Col md={7} mdPush={5}>
        Powered by <a href="https://github.com/byuzhang/youtube/"target="_blank">Simplified YouTube</a>
      </Col>
    </Row>
  )
}

export default Address;
