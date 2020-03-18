import { createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';
import { Post, PutPostType } from './types';

export const DELETE_POST = 'post/DELETE_POST';
export const DELETE_POST_SUCCESS = 'post/DELETE_POST_SUCCESS';
export const DELETE_POST_ERROR = 'post/DELETE_POST_ERROR';

export const EDIT_POST = 'post/EDIT_POST';
export const EDIT_POST_SUCCESS = 'post/EDIT_POST_SUCCESS';
export const EDIT_POST_ERROR = 'post/EDIT_POST_ERROR';

export const UPDATE_POST = 'post/UPDATE_POST';
export const UPDATE_POST_SUCCESS = 'post/UPDATE_POST_SUCCESS';
export const UPDATE_POST_ERROR = 'post/UPDATE_POST_ERROR';

export const GET_POSTS_LIST = 'post/GET_POSTS_LIST';
export const GET_POSTS_LIST_SUCCESS = 'post/GET_POSTS_LIST_SUCCESS';
export const GET_POSTS_LIST_ERROR = 'post/GET_POSTS_LIST_ERROR';

export const GET_POST = 'post/GET_POST';
export const GET_POST_SUCCESS = 'post/GET_POST_SUCCESS';
export const GET_POST_ERROR = 'post/GET_POST_ERROR';

export const deletePostAsync = createAsyncAction(
  DELETE_POST,
  DELETE_POST_SUCCESS,
  DELETE_POST_ERROR,
)<number, any, AxiosError>();

export const getPostsListAsync = createAsyncAction(
  GET_POSTS_LIST,
  GET_POSTS_LIST_SUCCESS,
  GET_POSTS_LIST_ERROR,
)<number, Post[], AxiosError>();

export const postAsync = createAsyncAction(
  UPDATE_POST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_ERROR,
)<Post, string, AxiosError<string>>();

export const putPostAsync = createAsyncAction(
  EDIT_POST,
  EDIT_POST_SUCCESS,
  EDIT_POST_ERROR,
)<PutPostType, string, AxiosError<string>>();

export const getPostAsync = createAsyncAction(
  GET_POST,
  GET_POST_SUCCESS,
  GET_POST_ERROR,
)<number, Post, AxiosError<string>>();