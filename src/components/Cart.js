import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import './Cart.css';

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart);
  return <CartItem products={cartItems} />;
};

export default Cart;
