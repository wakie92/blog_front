import { AnyAction } from 'redux';
import { getType, AsyncActionCreatorBuilder } from 'typesafe-actions';
export type AsyncState<T, E = any> = {
  data: T | null;
  loading: boolean;
  error: E | null;
};
export const asyncState = {
  initial: <T, E = any>(initialData?: T): AsyncState<T, E> => ({
    loading: false,
    data: initialData || null,
    error: null,
  }),
  loading: <T, E = any>(initialData?: T): AsyncState<T, E> => ({
    loading: true,
    data: initialData || null,
    error: null,
  }),
  success: <T, E = any>(initialData?: T): AsyncState<T, E> => ({
    loading: false,
    data: initialData || null,
    error: null,
  }),
  error: <T, E = any>(initialData?: T): AsyncState<T, E> => ({
    loading: false,
    data: initialData || null,
    error: null,
  }),
};

type AnyAsyncActionCreator = AsyncActionCreatorBuilder<any, any, any>;
export function transformToArray<AC extends AnyAsyncActionCreator>(
  asyncActionCreator: AC,
) {
  const { request, success, failure } = asyncActionCreator;
  return [request, success, failure];
}

export const handleAsyncActions = <S, AC extends AnyAsyncActionCreator, K extends keyof S>(
  type: AC,
  key: K
  ) => {
  return (state: S, action: AnyAction) => {
    const [request, success, failure] = transformToArray(type).map(getType);
    console.log(action.type, key);

    switch (action.type) {
      case request:
        return {
          ...state,
          [key]: asyncState.loading(),
        };
      case success:
        return {
          ...state,
          [key]: asyncState.success(action.payload),
        };
      case failure:
        return {
          ...state,
          [key]: asyncState.error(action.payload),
        };
      default:
        return state;
    }
  };
};
