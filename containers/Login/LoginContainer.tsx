import Login from '../../components/Login/Login';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/modules';
import { getLoginModal } from '../../store/modules/loginUI';

const LoginContainer = () => {
  const { isLoginModal } = useSelector(({ loginUI }: RootState )=> ({
    isLoginModal: loginUI.isLoginModal,
  }))
  console.log(isLoginModal);
  return (
    <Login visible={isLoginModal} />
  );
}

export default LoginContainer;