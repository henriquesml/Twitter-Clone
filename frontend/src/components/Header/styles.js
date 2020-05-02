import styled from 'styled-components';

export const Container = styled.div`
  background: #4bb0ee;
  padding: 0 30px;
  position: fixed;
  width: 100%;
`;

export const Content = styled.div`
  height: 65px;
  max-height: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Profile = styled.div`
  display: flex;
  margin-right: 20px;
  padding-right: 20px;
  border-right: 1px solid #eee;
  div {
    text-align: left;
    margin-left: 10px;
    strong {
      display: block;
      color: #FFF;
    }
    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #eee;
    }
  }
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;