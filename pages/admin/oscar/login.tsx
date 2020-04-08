import { loginEmail } from "../../../lib/Utils/utils";
import { RootState } from "../../../store/modules";
import { getIsLogged } from '../../../store/modules/loginUI';
import { useSelector, useDispatch } from "react-redux";
import { NextPage, NextPageContext } from "next";
import { useState } from "react";
import { useRouter } from "next/router";


type loginProps = {
  isServer: string;
};
const login: NextPage = ({ isServer }: loginProps) => {
  const dispatch = useDispatch();
  const { isLogged } = useSelector((state: RootState) => ({
    isLogged: state.loginUI.isLogged,
  }))
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
  const onSumit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await loginEmail(email, password);
    if (res) {
      dispatch(getIsLogged(true));
      router.push('/', '/');
    }

  }
  return (
    <>
      <form>
        <input onChange={onChangeEmail} value={email} />
        <input type="password" onChange={onChangePassword} value={password} />
      </form>
      <button onClick={onSumit}>
        {isLogged ? '로그아웃' : '로그인'}
      </button>
    </>
  )
}
login.getInitialProps = async (ctx: NextPageContext) => {
  const isServer = ctx.req ? 'server' : 'client';
  return { isServer };
};

export default login;