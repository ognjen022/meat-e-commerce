import React, { useState } from 'react';
import moment from 'moment';
import './Contact.css';
import { useSelector } from 'react-redux';

const Contact = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    adress: '',
    number: '',
    body: '',
    zip: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const cartItems = useSelector((state) => state.cart);

  const onFormSubmit = (e) => {
    e.preventDefault();

    const total = cartItems.reduce((total, product) => {
      return total + product.price * +product.amount;
    }, 0);

    console.log({
      totalPrice: total,
      ...formData,
      orderDate: moment(moment.now()).format('MMMM Do YYYY, h:mm:ss a'),
      ...cartItems,
    });
  };

  return (
    <form onSubmit={onFormSubmit} id="contact-form" className="form cf">
      <h3 className="col-100">Customer Information</h3>

      <div className="col cf">
        <div className="form-row cf">
          <i className="fas fa-user form-icon"></i>
          <label htmlFor="input-name">Name: *</label>
          <input
            type="text"
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
            required={true}
            value={formData.number}
            onChange={(e) => handleChange(e)}
            name="number"
            id="input-phone"
          />
        </div>

        <div className="form-row cf">
          <i className="fas fa-map-marker-alt form-icon"></i>
          <label htmlFor="input-adress">Adress: *</label>
          <input
            type="text"
            required={true}
            value={formData.address}
            onChange={(e) => handleChange(e)}
            name="adress"
            id="input-adress"
          />
        </div>

        <div className="form-row cf">
          <i className="fas fa-address-card form-icon"></i>
          <label htmlFor="input-zip">Zip: *</label>
          <input
            type="text"
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
          rows="4"
          value={formData.body}
          onChange={(e) => handleChange(e)}
          cols="50"
          name="body"
        ></textarea>
      </div>

      <div className="form-row col-100 cf">
        <button
          type="submit"
          value="Submit Order"
          className="contact-form-button"
        >
          Submit Order
        </button>
      </div>
    </form>
  );
};

export default Contact;
