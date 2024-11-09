import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login } from '../../types/authSlice';
import { useNavigate } from 'react-router-dom';
import './css/loginpage.css'

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
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center">
      <div className="login-card shadow">
        <h2 className="text-center mb-2">Welcome Back</h2>
        <p className="text-center mb-4">Enter your credentials to access your account.</p>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group mb-3">
          <span className="input-group-text">
            <i className="bi bi-envelope"></i> {/* Bootstrap icon */}
          </span>
            <input
              {...register('username')}
              className="form-control"
              placeholder="Username"
              required
            />
                  </div>
        <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="bi bi-lock"></i> {/* Bootstrap icon */}
            </span>
            <input
              {...register('password')}
              className="form-control"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
