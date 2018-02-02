import * as types from '../actions/types';

const initialState = {
	toast: '',
};

function common(state = initialState, action) {
  switch (action.type) {
    case types.showToast:
      return {
        ...state,
        toast: action.payload,
      };
    default: 
      return state;
  }
}

export default common;