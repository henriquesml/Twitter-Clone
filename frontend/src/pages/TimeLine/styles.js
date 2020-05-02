import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const Form = styled.form`
  width: 100%;
  background: #222;
  padding: 20px;
  border-radius: 5px;
  margin: 30px 0;
`;

export const Textarea = styled.textarea`
  border: 3px solid #333;
  border-radius: 5px;
  font-size: 14px;
  padding: 15px;
  width: 100%;
  resize: none;
`;

export const ListTwitters = styled.ul`
  list-style: none;
  color: #1c2022;
`;