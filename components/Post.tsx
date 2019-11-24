/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

export type PostProps = {
  title: string;
  preContent: string;
  view: number;
  onClick?: () => void;
  imgUrl: string;
};

export default function Post({
  title,
  preContent,
  view,
  onClick,
  imgUrl,
}: PostProps) {
  return (
    <WrpperProps onClick={onClick} imgUrl={imgUrl}>
      <div className="image-container">
        <img alt="" className="thumb-nail" />
      </div>
      <h2>{title}</h2>
      <span>{view}</span>
      <p>{preContent}</p>
    </WrpperProps>
  );
}

Post.defaultProps = {
  title: 'title',
  imgUrl:
    'https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png',
  view: 123,
  preContent: '내용미리보기내용미리보기내용미리보기내용미리보기',
};

const Wrapper = styled.li`
  border-radius: 4px;
  img {
    background-size: contain;
    height: 150px;
    width: 100%;
    border-radius: 4px 4px 0 0;
  }
`;

const WrpperProps = props => (
  <li
    css={css`
      border-radius: 4px;
      box-shadow: 0px 4px 8px 8px rgba(0, 0, 0, 0.05);

      .image-container {
        overflow: hidden;
        img {
          background-image: url(${props.imgUrl});
          background-size: cover;
          background-repeat: no-repeat;
          height: 150px;
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
            height: 150px;
          }
        }
      }
    `}
  >
    {props.children}
  </li>
);
