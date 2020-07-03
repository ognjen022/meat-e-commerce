import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Order from './Order';
import './Orders.css';
import './AppRouter.css';

const Orders = () => {
  const [orders, setOrders] = useState();
  const [loading, setLoading] = useState(true);

  const token = useSelector((state) => state.user.token);

  const completeOrder = async (id) => {
    const config = {
      headers: {
        Authorization: token,
      },
    };
    try {
      await axios.put(
        `http://meat-store-api.herokuapp.com/orders/${id}`,
        {
          completed: true,
        },
        config
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    let mounted = true;
    const fetchOrders = async () => {
      const config = {
        headers: {
          Authorization: token,
        },
      };

      const { data } = await axios.get(
        'http://meat-store-api.herokuapp.com/orders',
        config
      );

      if (mounted) {
        setOrders(data);
        setLoading(false);
      }
    };

    fetchOrders();
    return () => (mounted = false);
  }, [completeOrder]);

  return (
    <div className="page">
      <h1 className="Orders-title">Orders List</h1>
      {loading ? (
        <div className="Dashboard flex justify-between">
          <h3 className="loading-title">Loading Orders...</h3>
        </div>
      ) : (
        <div>
          {orders.map((order, i) =>
            order.completed ? null : (
              <Order
                handleCompleteOrder={completeOrder}
                key={order._id}
                index={i}
                {...order}
              />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Orders;
