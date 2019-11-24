/** @jsx jsx */
import { css, jsx } from '@emotion/core';

export default function Layout(props) {
  return (
    <div
      css={css`
      width: 90%;
      padding: 0 3%;
      margin: 0 auto;
    `}
    className="page-layout">
      {props.children}
    </div>
  )
};