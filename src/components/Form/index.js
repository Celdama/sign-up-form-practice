import React from 'react';
import { Wrapper, Content } from './Form.styles';

const Form = () => {
  return (
    <Wrapper>
      <Content>
        <form className='form' action='#'>
          <input
            className='form-input'
            type='email'
            placeholder='Email adress'
            name=''
            id=''
          />
          <input
            className='form-input'
            type='password'
            placeholder='Password'
            name=''
            id=''
          />
          <input
            className='form-input'
            type='password'
            placeholder='Confirm password'
            name=''
            id=''
          />

          <div className='form-marketing'>
            <input type='checkbox' name='' id='' />
            <label htmlFor=''>I want to join the newsletter</label>
          </div>
          <button>Sign up</button>
        </form>
      </Content>
    </Wrapper>
  );
};

export default Form;
