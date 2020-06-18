import { ADD_ITEM, REMOVE_ITEM, CHANGE_AMOUNT } from '../../consts/cartConsts';

const initialState = JSON.parse(localStorage.getItem('cart'));

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case REMOVE_ITEM:
      return state.filter((item) => item.id !== action.id);
    case CHANGE_AMOUNT:
      return state.map((item) =>
        item.id === action.id ? { ...item, amount: action.amount } : item
      );
    default:
      return state;
  }
}
