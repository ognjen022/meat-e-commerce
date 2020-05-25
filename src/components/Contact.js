import React, { useState } from 'react';
import moment from 'moment';
import './Contact.css';
import { Form, Button, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Contact = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    number: '',
    body: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const cartItems = useSelector((state) => state.cart);

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log({
      ...formData,
      createdAt: moment(moment.now()).format('MMMM Do YYYY, h:mm:ss a'),
      ...cartItems,
    });
  };

  return (
    <Container>
      <Form className="Form" onSubmit={onFormSubmit}>
        <Row>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => handleChange(e)}
              placeholder="Enter your name"
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group controlId="formBasicName">
            <Form.Label>Last Name:</Form.Label>
            <Form.Control
              type="text"
              value={formData.lastname}
              onChange={(e) => handleChange(e)}
              name="lastname"
              placeholder="Enter your last name"
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group controlId="formBasicName">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type="text"
              value={formData.email}
              onChange={(e) => handleChange(e)}
              name="email"
              placeholder="Enter your email"
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group controlId="formBasicName">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              type="text"
              value={formData.number}
              onChange={(e) => handleChange(e)}
              name="number"
              placeholder="Enter phone number"
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group controlId="formTextArea">
            <Form.Label>
              If you have any additional info for us, you can add it here:
            </Form.Label>
            <Form.Control
              as="textarea"
              value={formData.body}
              onChange={(e) => handleChange(e)}
              rows={7}
              cols={50}
              name="body"
            />
          </Form.Group>
        </Row>
        <Row>
          <Button className="Contact-button" variant="primary" type="submit">
            Submit
          </Button>
        </Row>
      </Form>
    </Container>
  );
};

export default Contact;
