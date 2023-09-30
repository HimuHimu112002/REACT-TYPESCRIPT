import React from 'react'
import { Col, Container, Row,Button} from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
const Contact = () => {
  return (
    <Container>
        <Row>
            <Col className='py-5'>

                <h1>Contact With Me</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="nameexample" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>

                    <Button variant="success">Submit</Button>
                </Form>
            </Col>
        </Row>
    </Container>
  )
}

export default Contact