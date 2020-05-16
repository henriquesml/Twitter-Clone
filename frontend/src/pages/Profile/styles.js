import styled from 'styled-components';

export const Container = styled.aside`
  width: 260px;
  height:100%;
  position: fixed;

  div.profile{
    width: 100%;
    height: calc(100% - 65px);
    margin-top: 10px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #FFF;

    h1{
      line-height: 40px;
      text-align: center;
      
      color: #333;
    }
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  width: 100%;
  height: 40px;

  justify-content: center;
  align-items: center;

  img {
    height: 24px;
    width: 24px;
    border-radius: 50%;
    margin-right: 15px;
  }

  h1 {
    font-size: 18px;
    color: #333;
    font-weight: 500;
  }
`