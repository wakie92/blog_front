import { createReducer } from 'typesafe-actions';
import { LoginUIState, LoginUIActions } from './types';
import { GET_LOGIN_MODAL, GET_AUTH, INITIALIZE } from './actions';

const initialState: LoginUIState = {
  isLoginModal: false,
  email: '',
  password: '',
};

const loginUI = createReducer<LoginUIState, LoginUIActions>(initialState, {
  [GET_LOGIN_MODAL]: state => {
    return ({
    ...state,
    isLoginModal: !state.isLoginModal,
  })},
  [GET_AUTH]: (state, action) => {
    const { name, value } = action.payload;
    return ({
      ...state,
      [name]: value,
    });
  },
  [INITIALIZE]: state => {
    return ({
      ...state,
      email: '',
      password: '',
    })
  },
});

export default loginUI;