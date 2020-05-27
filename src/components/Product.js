import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeAmount } from '../store/actions/cartActions';
import { addItem } from '../store/actions/cartActions';
import './Product.css';

const Product = (props) => {
  const [amount, setAmount] = useState(1);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const cartItems = useSelector((state) => state.cart);

  const addToCart = () => {
    const item = cartItems.find((item) => item.id === props.id);
    if (!item) {
      const itemToAdd = {
        id: props.id,
        title: props.title,
        img: props.img,
        description: props.description,
        price: props.price,
        amount: parseInt(amount),
      };
      console.log(itemToAdd);
      dispatch(addItem(itemToAdd));
    } else {
      dispatch(changeAmount(item.id, item.amount + parseInt(amount)));
    }
  };

  return (
    <div className="box-wrapper mx-10">
      <img src={props.img} alt="rhcp" />
      <div className="box-content">
        <span className="buy">
          <span onClick={addToCart}>
            <i className="fa fa-cart-plus"></i>
          </span>
        </span>
        <div className="title">{props.title}</div>
        <div className="desc">{props.description}</div>
        <div className="price">Amount:</div>
        <div className="Product-amount">
          <Form.Control
            className="Product-amount-input"
            min={1}
            value={amount}
            onChange={(e) => handleChange(e)}
            size="sm"
            type="number"
            placeholder="0"
          />
        </div>
        <span className="price">{props.price}$</span>
        <div className="footer">
          <ul>
            <li className="fa fa-star"></li>
            <li className="fa fa-star"></li>
            <li className="fa fa-star"></li>
            <li className="fa fa-star"></li>
            <li className="fa fa-star-o"></li>
          </ul>
        </div>
      </div>
      <div className="success"></div>
    </div>
  );
};

export default Product;
