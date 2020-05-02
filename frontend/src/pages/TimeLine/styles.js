import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background: #222;
  padding: 20px;
  border-radius: 5px;
  margin: 30px 0;
`;

export const Textarea = styled.textarea`
  border-radius: 5px;
  font-size: 14px;
  padding: 15px;
  width: 100%;
  height: 100px;
  resize: none;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  height: 34px;
  width: 100px;
  border-radius: 4px;
  border: none;
  background: #4bb0ee;
  color: #FFF;
  font-size: 14px;
`;

export const ListTwitters = styled.ul`
  list-style: none;
  color: #1c2022;
`;