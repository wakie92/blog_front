import { useCallback, useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { getValue } from "../../store/modules/postUI";

const useInputInEditor = () => {
  const dispatch = useDispatch();
  const onChange = useCallback((e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(getValue({ name, value }))
  }, [dispatch])
  
  const reset = useCallback(() => {
    dispatch(getValue({ name, value: '' }))
  }, [])
  return [onChange, reset] as [typeof onChange, typeof reset]
}

export default useInputInEditor;