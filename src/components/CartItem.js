import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from '../store/actions/cartActions';
import { changeAmount } from '../store/actions/cartActions';
import { useHistory } from 'react-router';
import './Cart.css';

function formatCurrency(value) {
  return Number(value).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}

const CartItem = (props) => {
  const dispatch = useDispatch();

  const history = useHistory();

  const subTotal = props.products.reduce((total, product) => {
    return total + product.price * +product.amount;
  }, 0);

  const discount = (subTotal * props.discount) / 100;

  const total = props.products.reduce((total, product) => {
    return total + product.price * +product.amount;
  }, 0);

  const checkMeOut = () => {
    history.push('/contact');
  };

  const onChangeProductQuantity = (e, itemid) => {
    dispatch(changeAmount(itemid, e.target.value));
  };

  const onRemoveProduct = (itemid) => {
    dispatch(removeItem(itemid));
  };

  const onEnterPromoCode = () => {};

  const checkPromoCode = () => {};

  return (
    <>
      <header className="container">
        <br />
        <h1 className="text-3xl">Your Cart</h1>
        <span className="count">{props.products.length} items in the cart</span>
      </header>
      <section className="container">
        <ul className="products">
          {props.products.map((product, index) => {
            return (
              <li className="row" key={index}>
                <div className="col left">
                  <div className="thumbnail">
                    <img
                      className="CartItem-img"
                      src={product.img}
                      alt={product.name}
                    />
                  </div>
                  <div className="detail">
                    <div className="name">
                      <b>{product.title}</b>
                    </div>
                    <div className="description">{product.description}</div>
                    <div className="price">
                      {formatCurrency(product.price * product.amount)}
                    </div>
                  </div>
                </div>

                <div className="col right">
                  <div className="quantity">
                    <input
                      type="number"
                      className="quantity"
                      step={1}
                      min={1}
                      value={product.amount}
                      onChange={(e) => onChangeProductQuantity(e, product.id)}
                    />
                    <span className="quantity-kg">KG</span>
                  </div>

                  <div className="remove">
                    <svg
                      onClick={() => onRemoveProduct(product.id)}
                      version="1.1"
                      className="close"
                      x="0px"
                      y="0px"
                      viewBox="0 0 60 60"
                      enableBackground="new 0 0 60 60"
                    >
                      <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
                    </svg>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="container">
        <div className="promotion">
          <label htmlFor="promo-code">Have A Promo Code?</label>
          <input type="text" onChange={onEnterPromoCode} />
          <button
            className="Cartitem-button"
            type="button"
            onClick={checkPromoCode}
          />
        </div>

        <div className="summary">
          <ul>
            {discount > 0 && (
              <li>
                Discount <span>{formatCurrency(discount)}</span>
              </li>
            )}
            <li className="total">
              Total <span>{formatCurrency(total)}</span>
            </li>
          </ul>
        </div>

        <div className="checkout">
          <button
            onClick={checkMeOut}
            className="Cartitem-button"
            type="button"
          >
            Check Out
          </button>
        </div>
      </section>
    </>
  );
};

export default CartItem;
