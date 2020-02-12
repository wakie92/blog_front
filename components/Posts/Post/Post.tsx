/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import showdown from 'showdown';
import { colors } from '../../../lib/styles/global';
import Link from 'next/link';
import { ROUTES } from '../../../lib/Routes/Routes';
import { formatDate } from '../../../lib/Utils/utils';

export type PostProps = {
  title: string;
  preContent: string;
  date: string;
  onClick?: () => void;
  imgUrl?: string;
  id: number;
};
const COMMENT_SVG = '/svg/iconmonstr-speech-bubble-comment-thin.svg';
export default function Post({
  title,
  preContent,
  date,
  onClick,
  imgUrl,
  id,
}: PostProps) {
  const pre = `${preContent.substring(0, 150)}...`
;  return (
    <WrpperProps onClick={onClick} imgUrl={imgUrl} dateColor={colors.gray4}>
      <Link href={`${ROUTES.devBlog}/[id]`} as={`${ROUTES.devBlog}/${id}`}>
        <div className="image-container">
          <img alt="" className="thumb-nail" />
        </div>
      </Link>
      <div className="li-article">
        <div className="post-info">
          <Link href={`${ROUTES.devBlog}/[id]`} as={`${ROUTES.devBlog}/${id}`}>
            <h3 className="title">{title}</h3>
          </Link>
          <div className="date-comment">
            <span className="date">{formatDate(date)}</span>
            <div className="commetns">
              <img src={COMMENT_SVG} alt="comments" />
            </div>
          </div>
        </div>
        <div className="pre-content">{pre}</div>
      </div>
    </WrpperProps>
  );
}

const WrpperProps = props => (
  <li
    css={css`
      border-radius: 4px;
      box-shadow: 0px 4px 8px 8px rgba(0, 0, 0, 0.05);
      .li-article {
        padding: 1rem 1.5rem;
        height: ${props.imgUrl ? '19rem' : '37rem'};
        padding-top: 2rem;
        .post-info {
          height: ${props.imgUrl ? '12rem' : '13rem'};
          border-bottom: 1px solid ${props.dateColor};
          .title {
            cursor: pointer;
            margin-bottom: 2rem;
          }
          .date-comment {
            display: flex;
            justify-content: space-between;
            margin-bottom: 1rem;
            .commetns {
              background-color: ${props.dataColor};
              img {
                height: 2rem;
                margin-right: 0.5rem;
                margin-top: 0.3rem;
                color: ${props.dataColor};
              }
            }
            .date {
              color: ${props.dateColor};
              font-size: 1.5rem;
              margin-bottom: 2rem;
            }
          }
        }
        .pre-content {
          margin-top: 1.5rem;
          color: #868e96;
          font-size: 1.5rem;
          overflow: hidden;
          height: ${props.imgUrl ? '5rem' : '20rem'};
          line-height: 1.9;
        }
      }
      .image-container {
        overflow: hidden;
        border-radius: 4px 4px 0 0;
        height: 18rem;
        cursor: pointer;
        display: ${!props.imgUrl && 'none'};
        img {
          border-radius: 4px;
          background-image: url(${props.imgUrl});
          background-size: cover;
          background-repeat: no-repeat;
          height: 100%;
          width: 100%;
          border-radius: 4px 4px 0 0;
          -webkit-transform: scale(1);
          -moz-transform: scale(1);
          -ms-transform: scale(1);
          -o-transform: scale(1);
          transform: scale(1);
          & :hover {
            transform: scale(1.1);
            -webkit-transform: scale(1.1);
            -moz-transform: scale(1.1);
            -ms-transform: scale(1.1);
            -o-transform: scale(1.1);
            transition: 0.3s;
            -webkit-transition: 0.3s;
            -moz-transition: 0.3s;
            -ms-transition: 0.3s;
            -o-transition: 0.3s;
          }
        }
      }
    `}
  >
    {props.children}
  </li>
);
