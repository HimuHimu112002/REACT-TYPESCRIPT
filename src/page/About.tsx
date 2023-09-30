import React from 'react'
import Card from '../components/AboutCard'
import { Col, Container, Row } from 'react-bootstrap'

const About = () => {

  const img1 = './image/1.png'
  const img2 = './image/2.png'
  const img3 = './image/3.png'
  return (

      <Container>
        <Row>
          <Col className='m-auto' sm={10} md={6} lg={4}>
            <Card Imag={img1}>
              <h3>Martin Jiso</h3>
              <p> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </Card>
          </Col>

          <Col className='m-auto' sm={10} md={6} lg={4}>
            <Card Imag={img2}>
              <h3>Martin Jiso</h3>
              <p> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </Card>
          </Col>

          <Col className='m-auto' sm={10} md={6} lg={4}>
            <Card Imag={img3}>
              <h3>Martin Jiso</h3>
              <p> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </Card>
          </Col>
        </Row>
      </Container>
  )
}

export default About