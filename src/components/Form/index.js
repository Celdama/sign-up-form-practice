import React, { useState } from 'react';
import { Wrapper, Content } from './Form.styles';

const Form = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    joinedNewsletter: false,
  });

  // value 1: email => string
  // value 2: password => string
  // value 3: password confirm => string
  // value 4: joinedNewsletter => boolean

  const handleChange = (event) => {
    const { name, type, value } = event.target;

    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: type === 'checkbox' ? !prevState.joinedNewsletter : value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    formData.password === formData.confirmPassword
      ? console.log('Successfully sign up')
      : console.log('password to not match');

    formData.joinedNewsletter &&
      console.log('Thanks for signing up for ou newsletter');

    console.log(formData);
  };

  const { email, password, confirmPassword, joinedNewsletter } = formData;

  return (
    <Wrapper>
      <Content>
        <form className='form' onSubmit={handleSubmit}>
          <input
            className='form-input'
            type='email'
            placeholder='Email adress'
            name='email'
            onChange={handleChange}
            value={email}
            id=''
          />
          <input
            className='form-input'
            type='password'
            placeholder='Password'
            name='password'
            onChange={handleChange}
            value={password}
            id=''
          />
          <input
            className='form-input'
            type='password'
            placeholder='Confirm password'
            name='confirmPassword'
            onChange={handleChange}
            value={confirmPassword}
            id=''
          />

          <div className='form-marketing'>
            <input
              type='checkbox'
              name='joinedNewsletter'
              id='joinedNewsletter'
              onChange={handleChange}
              value={joinedNewsletter}
            />
            <label htmlFor='joinedNewsletter'>
              I want to join the newsletter
            </label>
          </div>
          <button type='submit'>Sign up</button>
        </form>
      </Content>
    </Wrapper>
  );
};

export default Form;
