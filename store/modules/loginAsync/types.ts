import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { AxiosError } from 'axios';

export type LoginActions = ActionType<typeof actions>;

export type LoginAuth = {
  email: string,
  password: string,
};

export type updateKey = {
  name: string,
  value: string,
};

export type LoginState = {
  email: string,
  password: string,
  msg: {
    loading: boolean,
    data: null | string,
    error: null | AxiosError,
  },
};
