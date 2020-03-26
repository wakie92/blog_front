/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getIsLogged } from '../../store/modules/loginUI';

export default function Layout(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    if(props.token) {
      dispatch(getIsLogged(true))
    } else {
      dispatch(getIsLogged(false))
    }
  }, [props])
  return (
    <div
      css={css`
      width: 100%;
      /* padding: 0 3%; */
      padding-bottom: 100px;
      margin: 0 auto;
    `}
    className="page-layout">
      {props.children}
    </div>
  )
};