import { logoutFn, loginPopup } from "../../../lib/Utils/utils";
import { RootState } from "../../../store/modules";
import { useSelector } from "react-redux";
import { NextPage, NextPageContext } from "next";


type loginProps = {
  isServer: string;
};
const login: NextPage = ({ isServer }: loginProps) => {
  const { isLogged } = useSelector((state: RootState) => ({
    isLogged: state.loginUI.isLogged,
  }))
  
  const onLoginModal = () => {
    // dispatch(getLoginModal());
    const token = JSON.parse(sessionStorage.getItem("idToken"));
    console.log(token);
    if (token) {
      logoutFn();
    } else {
      loginPopup()
    }
  };

  return (
    <button onClick={onLoginModal}>
      {isLogged ? '로그아웃' : '로그인'}
    </button>
  )
}
login.getInitialProps = async (ctx: NextPageContext) => {
  const isServer = ctx.req ? 'server' : 'client';
  return { isServer };
};

export default login;