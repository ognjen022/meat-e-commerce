import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import Product from './Product';
import './Dashboard.css';

const Dashboard = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
    setLoading(false);
  }, []);

  const fetchProducts = async () => {
    const res = await axios.get(`http://kbapi.dvlp.rs/products`);
    setProducts(res.data);
  };

  const [products, setProducts] = useState([]);

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
