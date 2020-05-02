import styled from 'styled-components';
import { darken } from 'polished'

export const Wrapper = styled.div`
  height: 100%;
  background: #333;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;
  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    label {
      font-size: 14px;
      color: #eee;
      font-weight: bold;
      margin-bottom: 8px;
      text-align: start;
    }
    input {
      background: #FFF;
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #555;
      margin: 0 0 10px;
      &::placeholder {
        color: #555;
      }
    }
    button {
      margin: 5px 0 0;
      height: 44px;
      background: #3b9eff;
      font-weight: bold;
      color: #FFF;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.05, '#3b9eff')};
      }
    }
    a {
      color: #FFF;
      margin-top: 15px;
      font-size: 14px;
      opacity: 0.85;
      &:hover {
        opacity: 1
      }
    }
  }
`;
