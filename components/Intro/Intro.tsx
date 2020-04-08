import styled from 'styled-components';
import MyInfo from './MyInfo';

export default function Intro() {
  return (
    <Layout>
      <h1>About</h1>
      <MyInfo />
    </Layout>
  );
}

const Layout = styled.div`
  width: 90%;
  margin: auto;
`;