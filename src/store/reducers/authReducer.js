const initialState = {
  token: localStorage.getItem('token'),
  user: localStorage.getItem('user'),
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('user', action.payload.user.split(' ')[0]);
      return {
        ...state.user,
        token: action.payload.token,
        user: action.payload.user.split(' ')[0],
      };
    case 'LOG_OUT':
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return {
        token: null,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
