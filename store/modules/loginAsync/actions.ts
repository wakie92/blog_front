import { createAsyncAction } from 'typesafe-actions';
import { LoginAuth } from './types';
import { AxiosError } from 'axios';

export const GET_LOGIN = 'login/GET_LOGIN';
export const GET_LOGIN_SUCCESS = 'login/GET_LOGIN_SUCCESS';
export const GET_LOGIN_ERROR = 'login/GET_LOGIN_ERROR';


export const getLoginReqAsync = createAsyncAction(
  GET_LOGIN,
  GET_LOGIN_SUCCESS,
  GET_LOGIN_ERROR,
)<LoginAuth, string, AxiosError>();

