import { useState, useCallback } from "react";
import { logoutFn, loginPopup } from "../../lib/Utils/utils";
import Header from "../../components/CommonUI/Header";
import { useSelector } from "react-redux";
import { RootState } from "../../store/modules";

const HeaderContainer = () => {
  const { isLogged } = useSelector((state: RootState) => ({
    isLogged: state.loginUI.isLogged,
  }))
  const [toggle, setToggle] = useState(false);

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
  const handleToggle = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);
  console.log(isLogged);
  return (
    <Header 
      onLoginModal={onLoginModal} 
      isLogged={isLogged} 
      toggle={toggle} 
      handleToggle={handleToggle} 
    />
  )
}
export default HeaderContainer;