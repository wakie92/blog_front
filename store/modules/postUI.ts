import { updateKey } from './loginAsync/types';
import { createAction, ActionType, createReducer } from 'typesafe-actions';

const SET_INPUT_VALUES = 'post/SET_INPUT_VALUES';
const INPUT_VALUE = 'post/INPUT_VALUE';
const RESET_INPUT_VALUE = 'post/RESET_INPUT_VALUE';
const ADD_TAG_ARR = 'post/ADD_TAG_ARR';

export const addTagArr = createAction(ADD_TAG_ARR)<null>();
export const getValue = createAction(INPUT_VALUE, ({ name, value }: updateKey) => ({
	name,
	value
}))<updateKey>();

export const resetInputValue = createAction(RESET_INPUT_VALUE)<null>();
export const setInputValues = createAction(SET_INPUT_VALUES, 
	({ title, inputValue, mdValue, imgUrl, subTitle, tagArr, tag }: PostWrite) => ({
	title,
	inputValue,
	mdValue,
	imgUrl,
	tagArr,
	subTitle,
	tag
}))<PostWrite>();

const actions = {
	getValue,
	resetInputValue,
	setInputValues,
	addTagArr,
};

export type PostActions = ActionType<typeof actions>;

export type PostWrite = {
	title: string;
	inputValue: string;
	mdValue: string;
	imgUrl: null | string;
	subTitle: string;
	tagArr: string[] ;
	tag: string;
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
		imgUrl: null,
		tagArr: [],
		tag: '',
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
				imgUrl: null,
				tagArr: [],
				tag: ''
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
	},
	[ADD_TAG_ARR]: (state, action) => {
		const{ tagArr, tag } = state.postWrite
		const addTagArr = tagArr.concat(tag.replace(',', ''));
		console.log(addTagArr);
		return {
			...state,
			postWrite: {
				...state.postWrite,
				tagArr: addTagArr,
				tag: '',
			}
		}
	}
});

export default post;
