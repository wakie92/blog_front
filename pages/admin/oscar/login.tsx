import { logoutFn, loginPopup, loginEmail, checkUser } from "../../../lib/Utils/utils";
import { RootState } from "../../../store/modules";
import { useSelector } from "react-redux";
import { NextPage, NextPageContext } from "next";
import { useState } from "react";
import { useRouter } from "next/router";


type loginProps = {
  isServer: string;
};
const login: NextPage = ({ isServer }: loginProps) => {
  const { isLogged } = useSelector((state: RootState) => ({
    isLogged: state.loginUI.isLogged,
  }))
  const router = useRouter();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLoginModal = () => {
    // dispatch(getLoginModal());
    // const token = JSON.parse(sessionStorage.getItem("idToken"));
    // console.log(token);
    // if (token) {
    //   logoutFn();
    // } else {
    //   loginPopup()
    // }
    // loginEmail
  };
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
    res && router.push('/', '/');

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