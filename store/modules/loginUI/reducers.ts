import { createReducer } from 'typesafe-actions';
import { LoginUIState, LoginUIActions } from './types';
import { GET_LOGIN_MODAL } from './actions';

const initialState: LoginUIState = {
  isLoginModal: false,
};

const loginUI = createReducer<LoginUIState, LoginUIActions>(initialState, {
  [GET_LOGIN_MODAL]: state => {
    return ({
    ...state,
    isLoginModal: !state.isLoginModal,
  })},
});

export default loginUI;