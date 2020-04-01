import styled from 'styled-components';
import { colors } from '../../lib/styles/global';
import { test } from './infomd';
import '../../lib/styles/notion-markdown.css';

export default function MyInfo() {
  return (
    <Wrapper gray2={colors.gray2}>
      <div dangerouslySetInnerHTML={{__html: test}}>

      </div>
    </Wrapper>
  )
};

const Wrapper = styled.div<{gray2: string}>`
  margin: 0 auto;
  // box-shadow: 0px 4px 8px 8px rgba(0, 0, 0, 0.05);
  width: 90rem;
  min-height: 30rem;
  border-radius: 1rem;
  padding: 2rem;
  background-color: #fff;
  line-height: 1.5;
`;