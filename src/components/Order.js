import React, { useState } from 'react';
import moment from 'moment';
import { Card, Button, Modal } from 'react-bootstrap';
import './Order.css';

const Order = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const completeOrder = () => {
    props.handleCompleteOrder(props._id);
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Order Completion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to complete Order No. {props.index + 1}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={completeOrder}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="Order-card">
        <Card className="text-center">
          <Card.Header>Order No. {props.index + 1}</Card.Header>
          <Card.Body>
            <Card.Title>
              {props.customerName} {props.customerLastName}
            </Card.Title>
            <div className="Order-info">
              <Card.Text>
                <b>Email:</b>
                <br /> {props.customerEmail}
              </Card.Text>
              <Card.Text>
                <b>Phone:</b> <br />
                {props.customerPhone}
                <br />
              </Card.Text>
              <Card.Text>
                <b>Address:</b> <br />
                {props.customerAddress}
                <br />
              </Card.Text>
              <Card.Text>
                <b>Zip:</b>
                <br /> {props.customerZip}
                <br />
              </Card.Text>
              <Card.Text>
                <b>Additional Info:</b> <br />
                {props.customerAdditionalInfo}
                <br />
              </Card.Text>
              <b>Products Ordered:</b>{' '}
              <ul>
                {props.customerProductsOrder.map((product) => (
                  <li key={product.title}>
                    - {product.title}: {product.amount}kg
                  </li>
                ))}
              </ul>
              <Card.Text>
                <b>Total:</b> <br />
                {props.totalPrice.toFixed(2)}$
              </Card.Text>
            </div>
            <Button onClick={handleShow} variant="warning">
              Complete Order
            </Button>
          </Card.Body>
          <Card.Footer className="text-muted">
            {moment(props.createdAt).startOf('minute').fromNow()}
          </Card.Footer>
        </Card>
      </div>
    </>
  );
};

export default Order;
