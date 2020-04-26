import styled from 'styled-components';
import RenderMarkdownView from "../../CommonUI/RenderMarkdownView";
import Maybe from "../../Maybe/Maybe";
import { colors } from '../../../lib/styles/global';
import { breakpoints } from '../../../lib/styles/responsive';

type PostContentProps = {
  title: string;
  imgUrl: string;
  rawContent: string;
}
const PostContent = ({ title, imgUrl, rawContent }: PostContentProps) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <hr />
      <main>
        <Maybe isVisible={imgUrl}>
          <img className="main-img" src={imgUrl} alt="대표이미지" />
        </Maybe>
        <RenderMarkdownView html={rawContent}/>
      </main>
    </Wrapper>
  )
}
export default PostContent;

const Wrapper = styled.article`
  width: 100%;
	main {
		width: 76.8rem;
		margin: auto;
		display: flex;
		flex-direction: column;
    .main-img {
      margin: auto;
      padding-bottom: 4rem;
      max-height: 50rem;
      max-width: 100%;
    }
    @media screen and (max-width: ${breakpoints.medium}) {
      width: 90%;
    }
  }
  hr {
    width: 100%;
    border: 1px solid ${colors.gray5};
    margin: 2rem 0;
  }
`