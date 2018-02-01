import * as types from '../actions/types';

const initialState = {
	showLoginModal: false,
};

function common(state = initialState, action) {
  switch (action.type) {
    case types.loginModal:
      return {
        ...state,
        showLoginModal: action.payload,
      };
    default: 
      return state;
  }
}

export default common;