import styled from 'styled-components';
import { colors } from '../../../lib/styles/global';
import { breakpoints } from '../../../lib/styles/responsive';
import { Post } from '../../../store/modules/post';
import { AsyncState } from '../../../lib/Utils/asyncUtils';
import { AxiosError } from 'axios';
import { formatDate } from '../../../lib/Utils/utils';
import '../../../lib/styles/github-markdown.css';

type PostViewProps = {
  postData: AsyncState<Post, AxiosError>,
  test: string,
}

export default function PostView({ postData, test }: PostViewProps) {
  const { data, loading, error } = postData;
  console.log(postData);
  if (loading) return null;
  return (
    <Layout>
      <div className="wrapper">
        <span className="reg-date">{formatDate(data.date)}</span>
        <h1>{data.title}</h1>
        <hr />
        <div className="markdown-body" dangerouslySetInnerHTML={{ __html: data.contentMd }}>
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
