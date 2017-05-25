import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Address = (props) => {
  return (
    <Row bsClass="row footer">
      <Col md={5}>
        Created by <a href="https://icyfish.me/" target="_blank">icyfish</a>
      </Col>
      <Col md={7} className="text-right">
        Powered by <a href="https://github.com/icyfish/youtube/"target="_blank">Simplified YouTube</a>
      </Col>
    </Row>
  )
}

export default Address;
