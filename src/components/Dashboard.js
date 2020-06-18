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
    console.log('called');
    syncLocalStorage();
  }, [cartItems]);

  useEffect(() => {
    // fetchProducts();
    setProducts([
      {
        id: 0,
        title: 'Beef Fillet',
        img:
          'https://justmeat.ltd/image/cache/catalog/MI%C4%98SO/7836310_1-228x228.jpg',
        price: 7.67,
        description: 'This is a beef fillet.',
      },
      {
        id: 1,
        title: 'Beef Flank',
        img:
          'https://justmeat.ltd/image/cache/catalog/MI%C4%98SO/Depositphotos_111084932_original-228x228.jpg',
        price: 7.67,
        description: 'This is a beef flank.',
      },
      {
        id: 2,
        title: 'Beef Liver',
        img:
          'https://justmeat.ltd/image/cache/catalog/MI%C4%98SO/7836333_1-228x228.jpg',
        price: 7.67,
        description: 'This is a beef liver.',
      },
      {
        id: 3,
        title: 'Beef Trimming',
        img:
          'https://justmeat.ltd/image/cache/catalog/MI%C4%98SO/8108043_1-228x228.jpg',
        price: 7.67,
        description: 'This is beef trimming.',
      },
      {
        id: 4,
        title: 'Chicken Breast',
        img:
          'https://justmeat.ltd/image/cache/catalog/MI%C4%98SO/7836277_1-228x228.jpg',
        price: 7.67,
        description: 'This is chicken breast.',
      },
      {
        id: 5,
        title: 'Chicken Liver',
        img:
          'https://justmeat.ltd/image/cache/catalog/MI%C4%98SO/7836336_1-228x228.jpg',
        price: 7.67,
        description: 'This is chicken liver.',
      },
      {
        id: 6,
        title: 'Pork Loins',
        img:
          'https://image.shutterstock.com/image-photo/meat-pork-slices-loin-on-260nw-561686899.jpg',
        price: 3.4,
        description: 'These are pork loins.',
      },
      {
        id: 7,
        title: 'Whole Chicken',
        img:
          'https://previews.123rf.com/images/milkos/milkos1808/milkos180800676/106383302-top-view-of-fresh-raw-chicken-isolated-on-white-background.jpg',
        price: 4.5,
        description: 'This is a whole chicken.',
      },
    ]);
    setLoading(false);
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
