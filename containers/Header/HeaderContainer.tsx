import { useState, useCallback } from "react";
import { logoutFn, loginPopup } from "../../lib/Utils/utils";
import Header from "../../components/CommonUI/Header";
import { useSelector } from "react-redux";
import { RootState } from "../../store/modules";
import { useRouter } from "next/router";
import { ROUTES } from "../../lib/Routes/Routes";

const HeaderContainer = () => {
  const { isLogged } = useSelector((state: RootState) => ({
    isLogged: state.loginUI.isLogged,
  }))
  const [toggle, setToggle] = useState(false);
  
  const handleToggle = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);
  return (
    <Header 
      isLogged={isLogged} 
      toggle={toggle} 
      handleToggle={handleToggle} 
    />
  )
}
export default HeaderContainer;