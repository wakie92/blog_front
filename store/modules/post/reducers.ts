import { asyncState, transformToArray, handleAsyncActions } from './../../../lib/Utils/asyncUtils';
import { PostState, PostActions, Post } from './types';
import { createReducer } from 'typesafe-actions';
import {
	getPostsListAsync,
	postAsync,
	GET_POSTS_LIST,
	GET_POSTS_LIST_SUCCESS,
	GET_POSTS_LIST_ERROR,
	UPDATE_POST,
	UPDATE_POST_SUCCESS,
	UPDATE_POST_ERROR,
	GET_POST,
	GET_POST_SUCCESS,
	GET_POST_ERROR
} from './actions';

const initialState: PostState = {
	postsList: asyncState.initial(),
	reqPost: asyncState.initial(),
	post: asyncState.initial(),
};
const post = createReducer<PostState, PostActions>(initialState, {
	[GET_POSTS_LIST]: (state) => ({
		...state,
		postsList: asyncState.loading()
	}),
	[GET_POSTS_LIST_SUCCESS]: (state, action) => ({
		...state,
		postsList: asyncState.success(action.payload)
	}),
	[GET_POSTS_LIST_ERROR]: (state, action) => ({
		...state,
		postsList: asyncState.error(action.payload)
	}),
	[UPDATE_POST]: (state) => ({
		...state,
		reqPost: asyncState.loading()
	}),
	[UPDATE_POST_SUCCESS]: (state, action) => ({
		...state,
		reqPost: asyncState.success(action.payload)
	}),
	[UPDATE_POST_ERROR]: (state, action) => ({
		...state,
		reqPost: asyncState.error(action.payload)
	}),
	[GET_POST]: (state) => ({
		...state,
		post: asyncState.loading(),
	}),
	[GET_POST_SUCCESS]: (state, action) => ({
		...state,
		post: asyncState.success(action.payload)
	}),
	[GET_POST_ERROR]: (state, action) => ({
		...state,
		post: asyncState.error(action.payload)
	})
});

// refactoring code
const test = createReducer<PostState, PostActions>(initialState).handleAction(
	transformToArray(getPostsListAsync),
	handleAsyncActions(getPostsListAsync, 'postsList')
);

export default post;
