import { useRef } from 'react';
import { useLogin } from '../hooks/useLogin';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(emailRef.current.value, passwordRef.current.value);
  };

  return (
    <form className='login' onSubmit={handleSubmit}>
      <h3>Login</h3>

      <label>Email:</label>
      <input type='email' ref={emailRef} />

      <label>Password:</label>
      <input type='password' ref={passwordRef} />

      <button disabled={isLoading}>Login</button>
      {error && <div className='error'>{error}</div>}
    </form>
  );
};

export default Login;
