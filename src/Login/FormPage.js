import React from 'react'
import { Form, Button } from 'react-bootstrap'

export default function FormPage() {
  const submit = (e) => {
    e.preventDefault()
    console.log("submit")
    // tampilan masih belum sempurna
  }
  return (
    <div>
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
    </div>
  )
}
