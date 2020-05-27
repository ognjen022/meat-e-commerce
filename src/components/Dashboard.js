import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import Product from './Product';
import './Dashboard.css';
require('dotenv').config();

const Dashboard = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
    setLoading(false);
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`http://kbapi.dvlp.rs/products`);
      setProducts(res.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <h3 className="Dashboard-title">All Products: </h3>
          <br />
          <div className="Dashboard flex justify-between">
            {products.map((product, i) => {
              return (
                <div key={i}>
                  <Product
                    img={product.img}
                    title={product.title}
                    price={product.price}
                    id={product.id}
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
