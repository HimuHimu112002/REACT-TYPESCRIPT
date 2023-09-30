import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className='footre--section p-4 mt-4'>
      <Container>
        <Row>
          <Col md={4}>
            <h3>Omah</h3>
          </Col>
          <Col md={4}>
            <h5>TypeScript</h5>

            <ul>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Express.js</li>
              <li>Node.js</li>
              <li>Mongodb</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer