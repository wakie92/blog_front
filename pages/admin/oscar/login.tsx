import { logoutFn, loginPopup } from "../../../lib/Utils/utils";
import { RootState } from "../../../store/modules";
import { useSelector } from "react-redux";

const login = () => {
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

export default login;