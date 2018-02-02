import * as types from './types';

export function showToast(toast) {
  return {
    type: types.showToast,
    payload: toast,
  }
}
