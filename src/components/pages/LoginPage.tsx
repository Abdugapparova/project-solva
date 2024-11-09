import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login } from '../../types/authSlice';
import { useNavigate } from 'react-router-dom';

interface FormData {
  username: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    if (data.username === 'admin' && data.password === 'password') {
      dispatch(login());
      navigate('/');
    } else {
      alert('Неверный логин или пароль');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('username')} placeholder="Username" />
      <input {...register('password')} type="password" placeholder="Password" />
      <button type="submit">Войти</button>
    </form>
  );
};

export default LoginPage;
