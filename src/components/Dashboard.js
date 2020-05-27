import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import Product from './Product';
import './Dashboard.css';

const Dashboard = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(loading);
    fetchProducts();
    console.log(loading);
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`http://kbapi.dvlp.rs/products`);
      setProducts(res.data);
      setLoading(false);
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
          <div className="Dashboard">
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
