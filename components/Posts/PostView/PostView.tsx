import styled from 'styled-components';
import { colors } from '../../../lib/styles/global';
import { breakpoints } from '../../../lib/styles/responsive';
import { Post } from '../../../store/modules/post';
import { AsyncState } from '../../../lib/Utils/asyncUtils';
import { AxiosError } from 'axios';

type PostViewProps = {
  postData: AsyncState<Post, AxiosError>,
  test: string,
}

export default function PostView({ postData, test }: PostViewProps) {
  return (
    <Layout>
      <div className="wrapper">
        <span className="reg-date">2019년 12월 30일</span>
        <h1>제목입니다.제목밉니다.제목이에유</h1>
        <hr />
        <div className="content" dangerouslySetInnerHTML={{ __html: test }}>
        </div>
      </div>
    </Layout>
  );
}

const Layout = styled.div`
  width: calc(100% - 14rem);
  margin: auto;
  min-height: 70rem;
  /* background-color: ${colors.violet9}; */
  padding: 2rem;
  margin-top: 20rem;
  hr {
    width: 100%;
    border: 1px solid ${colors.gray5};
    margin: 2rem 0 ;
  }
  .reg-date {
    color: ${colors.gray5};
  }
  .wrapper {
    width: 100%;
  }
  @media screen and (max-width: ${breakpoints.large}) {
    width: calc(100% - 4rem);
  }
  @media screen and (max-width: ${breakpoints.medium}) {
  }
`;
