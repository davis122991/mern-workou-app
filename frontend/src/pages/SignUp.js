import { useRef } from 'react';
import { useSignup } from '../hooks/useSignup';

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(emailRef.current.value, passwordRef.current.value);
  };

  return (
    <form className='signup' onSubmit={handleSubmit}>
      <h3>Sign up</h3>

      <label>Email:</label>
      <input type='email' ref={emailRef} />

      <label>Password:</label>
      <input type='password' ref={passwordRef} />

      <button disabled={isLoading}>Sign up</button>
      {error && <div className='error'>{error}</div>}
    </form>
  );
};

export default Signup;
