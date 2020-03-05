import React from "react";
import moment from "moment";
import { v4 as uuidv4 } from 'uuid';
import "./Contact.css"
import {Form, Button, Container, Row} from "react-bootstrap";

class Contact extends React.Component {
  onFormSubmit = (e) => {
    e.preventDefault();
  
    const user = {
      id: uuidv4(),
      name: e.target.user.value,
      lastname: e.target.lastname.value,
      email: e.target.email.value,
      phone: e.target.number.value,
      body: e.target.content.value,
      createdAt: moment()
    }
    console.log(user);
    // Add functionality to insert user to backend API here..
  }
  render() {
    return(
      <Container>
            <Form className="Form" onSubmit={this.onFormSubmit}>
            <Row>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Name:</Form.Label>
                  <Form.Control type="text" name="user" placeholder="Enter your name" />                      
                </Form.Group>
              </Row>
              <Row>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Last Name:</Form.Label>
                  <Form.Control type="text" name="lastname" placeholder="Enter your last name" />                      
                </Form.Group>
              </Row>
              <Row>
                <Form.Group controlId="formBasicName">
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control type="text" name="email" placeholder="Enter your email" />                      
                </Form.Group>
              </Row>
              <Row>
              <Form.Group controlId="formBasicName">
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control type="text" name="number" placeholder="Enter phone number" />                      
                </Form.Group>
              </Row>
              <Row>
                <Form.Group controlId="formTextArea">
                  <Form.Label>If you have any additional info for us, you can add it here:</Form.Label>
                  <Form.Control as="textarea" rows={7} cols={50} name="content" />                      
                </Form.Group>
              </Row>
              <Row>
                <Button className="Contact-button" variant="primary" type="submit">Submit</Button>
              </Row>
            </Form>
        </Container>
    );
  }
}

export default Contact;