import axios from 'axios';

export const login = (payload) => ({
  type: 'LOG_IN',
  payload,
});

export const startLogin = (payload, navigate, person, stopLoading) => {
  return (dispatch) => {
    const token = {
      token: payload,
    };
    axios
      .post(`http://localhost:5000/users/login`, { token })
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        const user = {
          ...person,
          ...res.data,
        };
        dispatch(login(user));
        navigate();
        stopLoading();
      })
      .catch((err) => {
        console.error(err.message);
        stopLoading();
      });
  };
};

export const logout = () => ({
  type: 'LOG_OUT',
});

export const startLogOut = () => {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch(logout());
  };
};
