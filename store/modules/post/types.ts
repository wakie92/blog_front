import { AsyncState } from './../../../lib/Utils/asyncUtils';
import { AxiosError } from 'axios';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type PutPostType = {
  post: Post,
  id: string
}

export type PostActions = ActionType<typeof actions>;

export type Post = {
  id?: number;
  title: string;
  date: string;
  content: string;
  imgUrl?: null | string;
  contentMd: string;
  rawContent: string;
  subTitle: string;
};

export type PostState = {
  postsList: AsyncState<Post[], AxiosError>
  reqPost: AsyncState<string, AxiosError>
  post: AsyncState<{res: Post, resId: string}, AxiosError>
};
