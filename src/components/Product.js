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
    console.log(item);
    if (!item) {
      const itemToAdd = {
        id: props.id,
        title: props.title,
        img: props.img,
        description: props.description,
        price: props.price,
        amount: amount,
      };
      console.log(itemToAdd);
      dispatch(addItem(itemToAdd));
    } else {
      dispatch(changeAmount(item.id, item.amount + 1));
    }
  };

  return (
    <div className="Product">
      <h3 className="Product-title">{props.title}</h3>
      <div className="Product-image">
        <img src={`${props.img}`} alt="" />
      </div>
      <p className="Product-data">{props.description}</p>
      <p className="Product-data">
        <b>${(props.price * amount).toFixed(2)}/kg</b>
      </p>
      Amount in kg:
      <div className="Product-amount">
        <Form.Control
          min={1}
          value={amount}
          onChange={(e) => handleChange(e)}
          size="sm"
          type="number"
          placeholder="0"
        />
      </div>
      <button onClick={addToCart} className="Product-button">
        <span>Add To Cart</span>
      </button>
    </div>
  );
};

export default Product;
