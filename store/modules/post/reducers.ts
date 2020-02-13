import { asyncState, transformToArray, handleAsyncActions } from './../../../lib/Utils/asyncUtils';
import { PostState, PostActions, Post } from './types';
import { formatDate } from '../../../lib/Utils/utils';
import { createReducer } from 'typesafe-actions';
import { getPostsListAsync, postAsync } from './actions';
import { combineReducers } from 'redux';

const initialState: PostState = {
	postsList: asyncState.initial(),
	reqPost: asyncState.initial()
};

const getPost = createReducer<PostState, PostActions>(initialState).handleAction(
	transformToArray(postAsync),
	handleAsyncActions(postAsync, 'reqPost')
);

const updatePost = createReducer<PostState, PostActions>(initialState).handleAction(
	transformToArray(getPostsListAsync),
	handleAsyncActions(getPostsListAsync, 'postsList')
);

const post = combineReducers({ getPost, updatePost });
export default post;
