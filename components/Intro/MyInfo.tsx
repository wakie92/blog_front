import styled from 'styled-components';
import { colors } from '../../lib/styles/global';

export default function MyInfo() {
  return (
    <Wrapper gray2={colors.gray2}>
      <h2>
        안녕하세요 이창훈입니다.
      </h2>
      <p>React개발을 하는 프론트엔드 개발자입니다. React의 자유성과 활발한 커뮤니티를 좋아합니다.</p>
      <p>자바스크립트기반 기술에 관심이 많습니다. </p>
      <p>오늘보다 내일이 더 나은 개발자가 되기 위해 노력하고 있습니다. 그 노력을 기록하기 위해 블로그를 만들었습니다. </p>
      <h4>Career</h4>
    </Wrapper>
  )
};

const Wrapper = styled.div<{gray2: string}>`
  margin: 0 auto;
  box-shadow: 0px 4px 8px 8px rgba(0, 0, 0, 0.05);
  width: 90%;
  min-height: 30rem;
  border-radius: 1rem;
  padding: 2rem;
  background-color: #fff;
`;