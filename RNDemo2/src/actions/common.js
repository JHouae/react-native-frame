import * as types from './types';

export function presentLoginVC() {
  return {
    type: types.loginModal,
    payload: true,
  }
}

export function dismissLoginVC() {
  return {
    type: types.loginModal,
    payload: false,
  }
}