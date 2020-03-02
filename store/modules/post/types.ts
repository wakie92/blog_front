import { AsyncState } from './../../../lib/Utils/asyncUtils';
import { AxiosError } from 'axios';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type PostActions = ActionType<typeof actions>;

export type Post = {
  id?: number;
  title: string;
  date: string;
  content: string;
  imgUrl?: null | string;
  contentMd: string;
};

export type PostState = {
  postsList: AsyncState<Post[], AxiosError>
  reqPost: AsyncState<string, AxiosError>
  post: AsyncState<Post, AxiosError>
};
