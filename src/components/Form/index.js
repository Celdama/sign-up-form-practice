import React, { useState } from 'react';
import { Wrapper, Content } from './Form.styles';

const Form = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    isJoinList: false,
  });

  // value 1: email => string
  // value 2: password => string
  // value 3: password confirm => string
  // value 4: isJoinList => boolean

  const handleChange = (event) => {
    const { name, type, value } = event.target;

    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: type === 'checkbox' ? !prevState.isJoinList : value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    formData.password === formData.confirmPassword
      ? console.log('Successfully sign up')
      : console.log('password to not match');

    formData.isJoinList &&
      console.log('Thanks for signing up for ou newsletter');
  };

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
            value={formData.email}
            id=''
          />
          <input
            className='form-input'
            type='password'
            placeholder='Password'
            name='password'
            onChange={handleChange}
            value={formData.password}
            id=''
          />
          <input
            className='form-input'
            type='password'
            placeholder='Confirm password'
            name='confirmPassword'
            onChange={handleChange}
            value={formData.confirmPassword}
            id=''
          />

          <div className='form-marketing'>
            <input
              type='checkbox'
              name='isJoinList'
              id='isJoinList'
              onChange={handleChange}
              value={formData.isJoinList}
            />
            <label htmlFor='isJoinList'>I want to join the newsletter</label>
          </div>
          <button type='submit'>Sign up</button>
        </form>
      </Content>
    </Wrapper>
  );
};

export default Form;
