import React from 'react'
import { Form, Button, Card } from 'react-bootstrap'

export default function FormPage() {
  const submit = (e) => {
    e.preventDefault()
    console.log("submit")
    // tampilan masih belum sempurna
  }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
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
  )
}
