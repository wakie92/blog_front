/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { colors } from '../../../lib/styles/global';

export type LoadingPostProps = {};
export default function LoadingPost({}: LoadingPostProps) {
  const loadingPostArr = new Array(30);
  const ele: JSX.Element = (
    <WrpperProps gray1={colors.gray2}>
        <div className="image-container">
          <div className="thumb-nail" />
        </div>
        <div className="li-article">
          <div className="post-info">
            <h3 className="title" style={{ width: '100%'}} />
            <h3 className="title" style={{ width: '30%'}}/>
            <div className="date-comment">
              <span className="date"></span>
              <div className="commetns"></div>
            </div>
          </div>
          <div className="pre-content">
            <div style={{ width: '100%' }} />
            <div style={{ width: '100%' }} />
            <div style={{ width: '80%' }} />
          </div>
        </div>
      </WrpperProps>
  );
  for(let i = 0; i < 30; i+=1 ) {
    loadingPostArr.push(ele);
  }
  return <>
    {loadingPostArr}
  </>
}

const WrpperProps = props => (
  <li
    css={css`
      border-radius: 4px;
      box-shadow: 0px 4px 8px 8px rgba(0, 0, 0, 0.05);
      .li-article {
        padding: 1rem 1.5rem;
        margin: 1rem 0;
        height: 18rem;
        .post-info {
          height: 12rem;
          border-bottom: 1px solid ${props.gray1};
          margin-bottom: 1rem;
          .title {
            background-color: ${props.gray1};
            height: 2.5rem;
            border-radius: 5px;
            margin-bottom: 0.5rem;
          }
          .date-comment {
            display: flex;
            justify-content: space-between;
            .date {
              background-color: ${props.gray1};
              width: 60%;
              height: 1.5rem;
              border-radius: 5px;
              margin-bottom: 2rem;
              margin-top: 1.5rem;
            }
          }
        }
        .pre-content {
          div {
            height: 1.5rem;
            background-color: ${props.gray1};
            margin-bottom: 0.5rem;
            border-radius: 5px;
          }
        }
      }
      .image-container {
        overflow: hidden;
        border-radius: 4px 4px 0 0;
        height: 18rem;
        display: flex;
        justify-content: center;
        align-items: center;
        .thumb-nail {
          border-radius: 4px;
          width: calc(100% - 1rem);
          height: calc(100% - 1rem);
          background-color: ${props.gray1};
        }
      }
    `}
  >
    {props.children}
  </li>
);
