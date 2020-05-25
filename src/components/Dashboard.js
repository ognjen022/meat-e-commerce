import React, { useState } from 'react';
import Product from './Product';
import './Dashboard.css';

const Dashboard = (props) => {
  const [products, setProducts] = useState([
    {
      title: 'Beef Fillet',
      img:
        'https://justmeat.ltd/image/cache/catalog/MI%C4%98SO/7836310_1-228x228.jpg',
      price: 7.67,
      description: 'This is a beef fillet.',
    },
    {
      title: 'Beef Flank',
      img:
        'https://justmeat.ltd/image/cache/catalog/MI%C4%98SO/Depositphotos_111084932_original-228x228.jpg',
      price: 7.67,
      description: 'This is a beef flank.',
    },
    {
      title: 'Beef Liver',
      img:
        'https://justmeat.ltd/image/cache/catalog/MI%C4%98SO/7836333_1-228x228.jpg',
      price: 7.67,
      description: 'This is a beef liver.',
    },
    {
      title: 'Beef Trimming',
      img:
        'https://justmeat.ltd/image/cache/catalog/MI%C4%98SO/8108043_1-228x228.jpg',
      price: 7.67,
      description: 'This is beef trimming.',
    },
    {
      title: 'Chicken Breast',
      img:
        'https://justmeat.ltd/image/cache/catalog/MI%C4%98SO/7836277_1-228x228.jpg',
      price: 7.67,
      description: 'This is chicken breast.',
    },
    {
      title: 'Chicken Liver',
      img:
        'https://justmeat.ltd/image/cache/catalog/MI%C4%98SO/7836336_1-228x228.jpg',
      price: 7.67,
      description: 'This is chicken liver.',
    },
    {
      title: 'Pork Loins',
      img:
        'https://image.shutterstock.com/image-photo/meat-pork-slices-loin-on-260nw-561686899.jpg',
      price: 3.4,
      description: 'These are pork loins.',
    },
    {
      title: 'Whole Chicken',
      img:
        'https://previews.123rf.com/images/milkos/milkos1808/milkos180800676/106383302-top-view-of-fresh-raw-chicken-isolated-on-white-background.jpg',
      price: 4.5,
      description: 'This is a whole chicken.',
    },
  ]);

  return (
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
  );
};

export default Dashboard;
