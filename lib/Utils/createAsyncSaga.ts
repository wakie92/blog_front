import { call, put } from 'redux-saga/effects';
import { AsyncActionCreatorBuilder, PayloadAction } from 'typesafe-actions';

type PromiseCreatorFunction<P, T> = ((payload: P) => Promise<T>) | (() => Promise<T>);

function isPayloadAction<P>(action: any): action is PayloadAction<string, P> {
	return action.payload !== undefined;
}

export default function createAsyncSaga<T1, P1, T2, P2, T3, P3>(
	asyncActionCreator: AsyncActionCreatorBuilder<[T1, [P1, undefined]], [T2, [P2, undefined]], [T3, [P3, undefined]]>,
	promiseCreator: PromiseCreatorFunction<P1, P2>
) {
	return function* saga(action: ReturnType<typeof asyncActionCreator.request>) {
		console.log('saga');
		try {
			const result = isPayloadAction<P1>(action)
			? yield call(promiseCreator, action.payload)
			: yield call(promiseCreator);
			console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
			yield put(asyncActionCreator.success(result));
		} catch (e) {
			yield put(asyncActionCreator.failure(e));
		}
	};
}
