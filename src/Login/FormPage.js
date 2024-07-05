import React from 'react'
import { Form, Button, Card, Col } from 'react-bootstrap'

export default function FormPage() {
  const submit = (e) => {
    e.preventDefault()
    console.log("tombol submit di tekan")
    // submitt
  }
  return (
    <Col style={{
      justifyContent: 'center',
      height: '100vh',
      display: 'flex'
    }}>
      <Card style={{ width: '18rem', height: '20rem'}} className='mt-5'>
        <Card.Body>
          <Card.Title className='co'>Login simpel</Card.Title>
          <Form onSubmit={submit}>
            <Form.Group className="mb-3">
              <Form.Label>User</Form.Label>
              <Form.Control type="name" placeholder="Masukan Nama User" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Masukan Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Col>
  )
}
