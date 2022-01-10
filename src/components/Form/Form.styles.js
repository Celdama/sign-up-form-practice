import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: var(--white);
  border-radius: 8px;
  padding: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;

    .form-input {
      text-indent: 4px;
      padding: 6px 2px;
      border-radius: 4px;
      border: 1px solid gray;
      margin: 12px 0;
      width: 100%;
    }

    .form-marketing {
      margin: 10px 0;
    }

    button {
      padding: 10px 28px;
      background-color: var(--mainColor);
      border: none;
      border-radius: 4px;
      color: var(--white);
      margin: 10px 0;
    }
  }
`;
