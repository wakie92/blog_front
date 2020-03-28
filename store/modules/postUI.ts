import { updateKey } from './loginAsync/types';
import { createAction, ActionType, createReducer } from 'typesafe-actions';

const SET_INPUT_VALUES = 'post/SET_INPUT_VALUES';
const INPUT_VALUE = 'post/INPUT_VALUE';
const RESET_INPUT_VALUE = 'post/RESET_INPUT_VALUE';
export const getValue = createAction(INPUT_VALUE, ({ name, value }: updateKey) => ({
	name,
	value
}))<updateKey>();

export const resetInputValue = createAction(RESET_INPUT_VALUE)<null>();
export const setInputValues = createAction(SET_INPUT_VALUES, 
	({ title, inputValue, mdValue, imgUrl, subTitle }: PostWrite) => ({
	title,
	inputValue,
	mdValue,
	imgUrl,
	subTitle
}))<PostWrite>();

const actions = {
	getValue,
	resetInputValue,
	setInputValues,
};

export type PostActions = ActionType<typeof actions>;

export type PostWrite = {
	title: string;
	inputValue: string;
	mdValue: string;
	imgUrl: string | null;
	subTitle: string;
};

export type PostState = {
	postWrite: PostWrite;
};

const initialState: PostState = {
	postWrite: {
		title: '',
		inputValue: '',
		mdValue: '',
		subTitle:'',
		imgUrl: null
	}
};

const post = createReducer<PostState, PostActions>(initialState, {
	[SET_INPUT_VALUES]: (state, action) => {
		return {
			...state,
			postWrite: action.payload
		};
	},
	[RESET_INPUT_VALUE]: (state, action) => {
		return {
			...state,
			postWrite: {
				title: '',
				inputValue: '',
				mdValue: '',
				subTitle:'',
				imgUrl: null
			}
		};
	},
	[INPUT_VALUE]: (state, { payload: { name, value } }) => {
		return {
			...state,
			postWrite: {
				...state.postWrite,
				[name]: value
			}
		};
	}
});

export default post;
