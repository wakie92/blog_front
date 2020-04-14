import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';
import { NextPage, NextPageContext } from "next";
import { useState } from "react";
import { useRouter } from "next/router";
import HeaderContainer from '../containers/Header/HeaderContainer';
import WriteContainerTest from "../containers/Write/WriteContainerTest";


type loginProps = {
  isServer: string;
};
const options: NextPage = ({ isServer }: loginProps) => {
  const dispatch = useDispatch();
  const router = useRouter();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (e: React.ChangeEvent<any>) => {
    const { value, name } = e.target;
    setEmail(value);
  }
  const onChangePassword = (e: React.ChangeEvent<any>) => {
    const { value, name } = e.target;
    setPassword(value);
  }
  return (
    <Wrapper>
      <HeaderContainer />
      <WriteContainerTest />
      
      체크체크
    </Wrapper>
  )
}
options.getInitialProps = async (ctx: NextPageContext) => {
  const isServer = ctx.req ? 'server' : 'client';
  return { isServer };
};
const Wrapper = styled.main`
  width: 100%;
  height: 100rem;
  margin: auto;
`;
export default options;