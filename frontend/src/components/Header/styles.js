import styled from 'styled-components';

export const Container = styled.div`
  background: #4bb0ee;
  padding: 0 30px;
  position: fixed;
  width: 100%;
  z-index: 1;
`;

export const Content = styled.div`
  height: 65px;
  max-height: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  aside{
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #EEE;
  div {
    text-align: right;
    margin-left: 10px;
  }
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;