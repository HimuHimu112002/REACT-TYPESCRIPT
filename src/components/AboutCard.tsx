import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

type CardProps ={
    children: React.ReactNode
}

type Imagset ={
    Imag: string
}

const AboutCard = (props:CardProps & Imagset) => {
  return (
    <Container>
        <Row>
            <Col>
                <Card className='mt-4' style={{ width: '18rem' }}>
                    <Card.Img src={props.Imag} />
                    <Card.Body>
                        <Card.Text>
                            {props.children}
                        </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}
export default AboutCard