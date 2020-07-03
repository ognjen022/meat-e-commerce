import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import { login } from '../store/actions/authActions';
import { useDispatch } from 'react-redux';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState();

  const history = useHistory();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'http://meat-store-api.herokuapp.com/users/login',
        formData
      );
      console.log(res.data);
      dispatch(login(res.data));
      setError(null);
      history.push('/orders');
    } catch (err) {
      console.log(err.response.data.message);
      setError(err.response.data.message);
    }
  };

  return (
    <form className="form-1" onSubmit={onFormSubmit}>
      <p className="form-title">Employee Login</p>

      <p className="field">
        <input
          type="text"
          value={formData.email}
          onChange={(e) => handleChange(e)}
          name="email"
          placeholder="Email"
        />
        <i className="fas fa-user-circle"></i>
      </p>
      <p className="field">
        <input
          type="password"
          value={formData.password}
          onChange={(e) => handleChange(e)}
          name="password"
          placeholder="Password"
        />
        <i className="fas fa-lock"></i>
      </p>
      <p className="submit">
        <button type="submit" name="submit">
          <i className="fas fa-arrow-circle-right"></i>
        </button>
      </p>
      <p
        className="form-subtitle"
        style={{ color: 'red', textAlign: 'center' }}
      >
        {error}
      </p>
    </form>
  );
};

export default Login;
