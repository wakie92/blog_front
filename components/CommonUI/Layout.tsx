/** @jsx jsx */
import { css, jsx } from '@emotion/core';

export default function Layout(props) {
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