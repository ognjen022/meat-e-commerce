import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import './Cart.css';

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart);

  const syncLocalStorage = () => {
    window.localStorage.setItem('cart', JSON.stringify(cartItems));
  };

  useEffect(() => {
    console.log('called');
    syncLocalStorage();
  }, [cartItems]);

  return <CartItem products={cartItems} />;
};

export default Cart;
