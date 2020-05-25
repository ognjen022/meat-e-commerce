import { ADD_ITEM, REMOVE_ITEM, CHANGE_AMOUNT } from '../../consts/cartConsts';

export const addItem = (payload) => async (dispatch) => {
  dispatch({
    type: ADD_ITEM,
    payload,
  });
};

export const removeItem = (id) => async (dispatch) => {
  dispatch({
    type: REMOVE_ITEM,
    id,
  });
};

export const changeAmount = (id, amount) => async (dispatch) => {
  dispatch({
    type: CHANGE_AMOUNT,
    id,
    amount,
  });
};
