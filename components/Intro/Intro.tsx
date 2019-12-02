import styled from 'styled-components';
import MyInfo from './MyInfo';

export default function Intro() {
  return (
    <Layout>
      <h1>자기소개 컴포넌트</h1>
      <MyInfo />
    </Layout>
  );
}

const Layout = styled.div`
  width: 90%;
  margin: auto;
`;