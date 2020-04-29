import { useCallback, useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { getValue } from "../../store/modules/postUI";

const useInputInEditor = () => {
  const dispatch = useDispatch();
  const onChange = useCallback((e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(getValue({name, value}))
  }, [dispatch])
  return onChange as typeof onChange
}

export default useInputInEditor;