import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import axios from 'axios';
import moment from 'moment';
import { Modal, Button } from 'react-bootstrap';
import './Contact.css';

const Contact = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    address: '',
    number: '',
    body: '',
    zip: '',
  });

  const history = useHistory();

  let inputFile = '';

  const [error, setError] = useState();

  const [orderCompleted, setOrderCompleted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const cartItems = useSelector((state) => state.cart);

  const checkFormValidity = () => {
    if (
      !formData.name ||
      !formData.lastname ||
      !formData.address ||
      !formData.number ||
      !formData.zip ||
      !formData.email
    ) {
      setError('Please fill in all the fields');
      return false;
    } else if (cartItems.length === 0) {
      setError('Your cart is empty');
      return false;
    } else {
      return true;
    }
  };

  const total = cartItems.reduce((total, product) => {
    return total + product.price * +product.amount;
  }, 0);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const order = {
        totalPrice: total,
        ...formData,
        orderDate: moment(moment.now()).format('MMMM Do YYYY, h:mm:ss a'),
        productsOrdered: [...cartItems],
      };
      await axios.post('https://meat-store-api.herokuapp.com/orders', order);
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => {
    history.push('/mycart');
    setShow(false);
  };

  const handleShow = () => {
    handleCartItemsInfo();
    setShow(true);
  };

  const handleModalCartRedirect = () => {
    history.push('/mycart');
    setShow(false);
  };

  const handleFormSuccessRedirect = () => {
    inputFile.click();
    setOrderCompleted(true);
    setTimeout(() => {
      history.push('/products');
      setShow(false);
    }, 1200);
  };

  const handleCartItemsInfo = () => {
    const orders = cartItems.map((item) => {
      return {
        title: item.title,
        amount: item.amount,
      };
    });

    return orders;
  };

  const orderItems = handleCartItemsInfo();

  return (
    <>
      <form onSubmit={onFormSubmit} id="contact-form" className="form cf">
        <h3 className="col-100">Customer Information</h3>
        <p className="col-100" style={{ color: 'red', textAlign: 'center' }}>
          {error}
        </p>
        <div className="col cf">
          <div className="form-row cf">
            <i className="fas fa-user form-icon"></i>
            <label htmlFor="input-name">Name: *</label>
            <input
              type="text"
              placeholder="Enter your name"
              required={true}
              value={formData.name}
              onChange={(e) => handleChange(e)}
              name="name"
              id="input-name"
            />
          </div>

          <div className="form-row cf">
            <i className="far fa-user form-icon"></i>
            <label htmlFor="input-lastname">Last Name: *</label>
            <input
              type="text"
              placeholder="Enter your last name"
              required={true}
              value={formData.lastname}
              onChange={(e) => handleChange(e)}
              name="lastname"
              id="input-lastname"
            />
          </div>

          <div className="form-row cf">
            <i className="fas fa-envelope form-icon"></i>
            <label htmlFor="input-email">Email: *</label>
            <input
              type="text"
              placeholder="Enter your email"
              name="email"
              required={true}
              value={formData.email}
              onChange={(e) => handleChange(e)}
              id="input-email"
            />
          </div>
        </div>

        <div className="col cf">
          <div className="form-row cf">
            <i className="fas fa-phone form-icon"></i>
            <label htmlFor="input-phone">Phone: *</label>
            <input
              type="text"
              placeholder="Enter phone number"
              required={true}
              value={formData.number}
              onChange={(e) => handleChange(e)}
              name="number"
              id="input-phone"
            />
          </div>

          <div className="form-row cf">
            <i className="fas fa-map-marker-alt form-icon"></i>
            <label htmlFor="input-adress">Address: *</label>
            <input
              type="text"
              placeholder="Enter your address"
              required={true}
              value={formData.address}
              onChange={(e) => handleChange(e)}
              name="address"
              id="input-address"
            />
          </div>

          <div className="form-row cf">
            <i className="fas fa-address-card form-icon"></i>
            <label htmlFor="input-zip">Zip: *</label>
            <input
              type="text"
              placeholder="Enter Zip code"
              required={true}
              value={formData.zip}
              onChange={(e) => handleChange(e)}
              name="zip"
              id="input-zip"
            />
          </div>
        </div>

        <div className="form-row col-100 cf">
          <i className="fas fa-info-circle form-icon"></i>
          <label htmlFor="textarea-message">Additional Information: </label>
          <textarea
            id="textarea-message"
            placeholder="Any other information you have for us goes here..."
            rows="4"
            value={formData.body}
            onChange={(e) => handleChange(e)}
            cols="50"
            name="body"
          ></textarea>
        </div>
        {orderCompleted ? (
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Successfully Ordered</Modal.Title>
            </Modal.Header>
            <Modal.Body>Thank you for your order!</Modal.Body>
            <Modal.Footer>
              {/* <Button variant="secondary" onClick={handleModalCartRedirect}>
                Back To Cart
              </Button> */}
            </Modal.Footer>
          </Modal>
        ) : (
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Submit Order?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p style={{ fontWeight: '700' }}>Your order is:</p>
              Name: {formData.name} <br />
              Last Name: {formData.lastname} <br />
              Email: {formData.email} <br /> Address: {formData.address} <br />{' '}
              Phone Number: {formData.number} <br /> Additional Info:{' '}
              {formData.body} <br /> Zip: {formData.zip} <br /> Items Ordered:{' '}
              {orderItems.map((item) => (
                <div key={item.title}>
                  {item.title} - {item.amount}kg
                </div>
              ))}
              Total Price: {total}$
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleModalCartRedirect}>
                Back To Cart
              </Button>
              <Button
                type="submit"
                variant="primary"
                onClick={handleFormSuccessRedirect}
              >
                Complete Order
              </Button>
            </Modal.Footer>
          </Modal>
        )}
        <button
          ref={(input) => {
            inputFile = input;
          }}
          type="submit"
          style={{ display: 'none' }}
        ></button>
      </form>
      <div className="form-row col-100 cf">
        <button
          onClick={() => (checkFormValidity() ? handleShow() : '')}
          value="Submit Order"
          className="contact-form-button"
        >
          Submit Order
        </button>
      </div>
    </>
  );
};

export default Contact;
