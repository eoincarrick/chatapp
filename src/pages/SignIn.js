import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const formSubmission = (event) => {
    event.preventDefault();
  };

  const onChange = (event) => {
    setFormData((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <section className='register'>
      <nav className='registerHeader'>
        <div>Logo</div>
        <div className='signIn'>
          <Link to='/register'>Register</Link>
        </div>
      </nav>
      <div className='registerBody'>
        <h1>Sign-in account</h1>
        <div className='registerWithOthers'>
          <div className='other'>
            <Link className='account' to='/auth/google'>
              Sign-in with Google
            </Link>
            <Link className='account' to='/auth/facebook'>
              Sign-in with Facebook
            </Link>
          </div>
          <div className='line'>
            <hr /> or sign-in with email <hr />
          </div>
        </div>

        <form onSubmit={formSubmission} className='registerForm'>
          <div className='formGroup'>
            <label>E-Mail</label>
            <input
              type='email'
              name='email'
              className='form'
              value={email}
              onChange={onChange}
              placeholder='example@company.com'
            />
          </div>

          <div className='formGroup'>
            <span>
              <label>Password</label>
              <label>
                <Link to='/forget-password'>Forgot password?</Link>
              </label>
            </span>
            <input
              type='password'
              name='password'
              className='form'
              value={password}
              onChange={onChange}
              placeholder='Enter Password'
            />
          </div>

          <div className='formGroup'>
            <button className='btn'>Register</button>
          </div>
        </form>
      </div>
      <footer className='registerFooter'>
        <div>
          <p>❤ 2022 Company Limited</p>
        </div>
        <div>
          <Link to='/terms-and-conditions'>Term And Conditions</Link>
          <Link to='/data-privacy'>Data Privacy</Link>
          <Link to='/security'>Security</Link>
        </div>
      </footer>
    </section>
  );
};

export default SignIn;
