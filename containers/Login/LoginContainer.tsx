import Login from '../../components/Login/Login';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/modules';
import {
  getLoginModal,
  getAuth,
  initialize,
} from '../../store/modules/loginUI';
import { getLoginReqAsync } from '../../store/modules/loginAsync';
import { setItem } from '../../lib/Utils/utils';

const LoginContainer = () => {
  const dispatch = useDispatch();
  const { isLoginModal, email, password } = useSelector(
    ({ loginUI }: RootState) => ({
      isLoginModal: loginUI.isLoginModal,
      email: loginUI.email,
      password: loginUI.password,
    }),
  );



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(getAuth({ name, value }));
  };

  const handleSubmit = () => {
    const res = dispatch(getLoginReqAsync.request({ email, password }));
    if (res) {
      const auth = {
        email,
        message: res,
      }
      setItem('auth', auth);
    }
  };

  const onLoginModal = () => {
    dispatch(getLoginModal());
    dispatch(initialize());
  };

  return (
    <Login
      visible={isLoginModal}
      email={email}
      password={password}
      onChange={handleChange}
      onClick={handleSubmit}
      onClose={onLoginModal}
    />
  );
};

export default LoginContainer;
