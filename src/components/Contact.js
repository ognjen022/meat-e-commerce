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
    card: '',
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
    <div className="leading-loose mx-auto">
      <form
        onSubmit={onFormSubmit}
        className="max-w-xl mx-auto m-4 p-10 bg-white rounded shadow-xl"
      >
        <p className="text-gray-800 font-medium">Customer information</p>
        <div className="">
          <label className="block text-sm text-gray-00" htmlFor="cus_name">
            Name
          </label>
          <input
            className="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
            name="name"
            value={formData.name}
            onChange={(e) => handleChange(e)}
            type="text"
            required="true"
            placeholder="Your Name"
            aria-label="Name"
          />
        </div>
        <div className="">
          <label className="block text-sm text-gray-00" htmlFor="cus_name">
            Last Name
          </label>
          <input
            className="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
            name="lastname"
            value={formData.lastname}
            onChange={(e) => handleChange(e)}
            type="text"
            required="true"
            placeholder="Your Last Name"
            aria-label="Name"
          />
        </div>
        <div className="">
          <label className="block text-sm text-gray-00" htmlFor="cus_name">
            Adress
          </label>
          <input
            className="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
            name="adress"
            value={formData.adress}
            onChange={(e) => handleChange(e)}
            type="text"
            required="true"
            placeholder="Your Adress"
            aria-label="Name"
          />
        </div>
        <div className="mt-2">
          <label className="block text-sm text-gray-600" htmlFor="cus_email">
            Email
          </label>
          <input
            className="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
            name="email"
            value={formData.email}
            onChange={(e) => handleChange(e)}
            type="text"
            required="true"
            placeholder="Your Email"
            aria-label="Email"
          />
        </div>
        <div className="mt-2">
          <label className=" block text-sm text-gray-600" htmlFor="cus_email">
            Phone
          </label>
          <input
            className="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
            name="number"
            value={formData.number}
            onChange={(e) => handleChange(e)}
            type="text"
            required="true"
            placeholder="Your phone number"
            aria-label="Email"
          />
        </div>
        <div className="mt-2">
          <label className=" block text-sm text-gray-600" htmlFor="cus_email">
            Additional Info
          </label>
          <textarea
            className="w-full px-2 text-gray-700 bg-gray-200 rounded"
            name="body"
            value={formData.body}
            onChange={(e) => handleChange(e)}
            type="textarea"
            rows="4"
            cols="50"
            placeholder="If you have any additional info for us, let us know here"
            aria-label="Email"
          />
        </div>
        <p className="mt-4 text-gray-800 font-medium">Payment information</p>
        <div className="">
          <label className="block text-sm text-gray-600" htmlFor="cus_name">
            Card
          </label>
          <input
            className="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
            name="card"
            value={formData.card}
            onChange={(e) => handleChange(e)}
            type="text"
            required="true"
            placeholder="Card Number MM/YY CVC"
            aria-label="Name"
          />
        </div>
        <div className="mt-4">
          <button
            className="px-4 py-1 text-white bg-gray-800 transition duration-500 ease-in-out block mx-auto font-light tracking-wider hover:bg-gray-900 rounded"
            type="submit"
          >
            Submit Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
