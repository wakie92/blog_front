import { createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';
import { Post } from './types';

export const GET_POSTS_LIST = 'post/GET_POSTS_LIST';
export const GET_POSTS_LIST_SUCCESS = 'post/GET_POSTS_LIST_SUCCESS';
export const GET_POSTS_LIST_ERROR = 'post/GET_POSTS_LIST_ERROR';

export const getPostsListAsync = createAsyncAction(
  GET_POSTS_LIST,
  GET_POSTS_LIST_SUCCESS,
  GET_POSTS_LIST_ERROR
)<undefined, Post[], AxiosError>();
