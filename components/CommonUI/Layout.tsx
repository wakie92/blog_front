/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const Layout = (props) => {
  return (
    <div
      css={css`
      width: 100%;
      /* padding: 0 3%; */
      // padding-bottom: 100px;
      margin: 0 auto;
    `}
    className="page-layout">
      {props.children}
    </div>
  )
};

export default Layout;