import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Product from './Product';
import './Dashboard.css';
require('dotenv').config();

const Dashboard = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const cartItems = useSelector((state) => state.cart);

  const syncLocalStorage = () => {
    window.localStorage.setItem('cart', JSON.stringify(cartItems));
  };

  useEffect(() => {
    syncLocalStorage();
  }, [cartItems]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        `https://meat-store-api.herokuapp.com/products`
      );
      setProducts(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <h3 className="Dashboard-title">All Products: </h3>
      {loading ? (
        <div className="Dashboard flex justify-between">
          <h3 className="loading-title mt-10 text-2xl mx-auto">
            Loading Products...
          </h3>
        </div>
      ) : (
        <div>
          <br />
          <div className="Dashboard flex justify-between">
            {products.map((product, i) => {
              return (
                <div key={i}>
                  <Product
                    img={product.img}
                    title={product.title}
                    price={product.price}
                    id={product._id}
                    description={product.description}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
