import Login from '../../components/Login/Login';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/modules';
import { getLoginModal, getAuth } from '../../store/modules/loginUI';
import { getLoginReqAsync } from '../../store/modules/loginAsync';

const LoginContainer = () => {
  const dispatch = useDispatch();
  const { isLoginModal, email, password } = useSelector(({ loginUI }: RootState )=> ({
    isLoginModal: loginUI.isLoginModal,
    email: loginUI.email,
    password: loginUI.password,
  }))
  console.log(isLoginModal);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(getAuth({name, value}));
  }

  const handleSubmit = () => {
    dispatch(getLoginReqAsync.request({email, password}))
  }

  return (
    <Login
      visible={isLoginModal}
      email={email}
      password={password}
      onChange={handleChange}
      onClick={handleSubmit}
    />
  );
}

export default LoginContainer;