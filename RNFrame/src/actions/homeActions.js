import * as types from './types';
import { get } from '../network/network';
import api from '../common/api';

export function requestDiscount() {
  return (dispatch) => {
    get(api.discount)
    .then((result) => {
      dispatch({
        type: types.requestDiscount, 
        payload: result.data
      });
    }).catch((err) => {

    })
  }
}

export function requestRecommend() {
  return (dispatch) => {
    get(api.recommend)
    .then((result) => {
      let dataList = result.data.map(
        (info) => {
          return {
            id: info.id,
            imageUrl: info.squareimgurl,
            title: info.mname,
            subtitle: `[${info.range}]${info.title}`,
            price: info.price
          }
        }
      )
      dispatch({
        type: types.requestRecommend, 
        payload: dataList
      });
    }).catch((err) => {
      
    })
  }
}