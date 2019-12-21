// export const createPromiseThunk = (type, promiseCreator) => {
//   const [SUCESS, ERROR] = [`${type}_SUCCESS, ${type}_ERROR`];
//   return param => async dispatch => {
//     // api 요청 시작
//     dispatch({ type, param });
//     try {
//       const payload = await promiseCreator(param);
//       dispatch({ type: SUCESS, payload });
//     } catch (e) {
//       dispatch({ type: ERROR, payload: e, error: true });
//     }
//   };
// };
export const reducerUtils = {
  initial: (initialData = null) => ({
    loading: false,
    data: initialData,
    error: null
  }),
  loading: (prevState = null) => ({
    loading: true,
    data: prevState,
    error: null
  }),
  // 성공 상태
  success: payload => ({
    loading: false,
    data: payload,
    error: null
  }),
  // 실패 상태
  error: error => ({
    loading: false,
    data: null,
    error: error
  })
};

export const handleAsyncActions = (type, key) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (state, action) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: reducerUtils.loading()
        };
      case SUCCESS:
        return {
          ...state,
          [key]: reducerUtils.success(action.payload)
        };
      case ERROR:
        return {
          ...state,
          [key]: reducerUtils.error(action.payload)
        };
      default:
        return state;
    }
  };
};