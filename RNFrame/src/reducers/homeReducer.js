import * as types from '../actions/types';

const initialState = {
  discountData: [],
  recommendData: [],
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case types.requestDiscount:
      return {
        ...state,
        discountData: action.payload,
      };
    case types.requestRecommend:
      return {
        ...state,
        recommendData: action.payload,
      }
    default: 
      return state;
  }
}

export default homeReducer;