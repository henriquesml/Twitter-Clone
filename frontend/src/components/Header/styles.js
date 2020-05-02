import styled from 'styled-components';
import { darken } from 'polished'

export const HeaderMain = styled.header`
  width: 100%;
  height:46px;
  position: fixed;
  background: #4bb0ee;
  box-shadow: 0 1px 1px #DDD;
  z-index: 9999;

  .wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170px;
    padding: 0 30px;
    margin: 0 auto;
    height: 100%;
  }

  ul{
    display: flex;
  }

  li:first-child {
    margin-left: 0px;
  }

  li{
    display: flex;
    align-items: center;
    margin-left: 30px;
    
    font-size: 13px;
    color: #FFF;
    font-weight: bold;
    
  }

  svg{
    margin-right: 7px;
  }

  .side {
    display: flex;
  }

  .side input {
    height: 34px;
    width: 220px;
    padding: 0 12px;

    background: #F5F8FA;
    border: 1px solid #E6ECF0;
    border-radius: 16px;
    color: #667581;
    font-size: 12px;
    
  }

  .side img {
    height: 34px;
    width: 34px;
    border-radius: 50%;
    margin: 0 15px;
  }

  .side button {
    height: 34px;
    width: 90px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #1a9ce5;
    font-weight: bold;
    color: #FFF;
    border: 0;
    border-radius: 16px;

    :hover{
      background: ${darken(0.03, '#1a9ce5')}
    }

  }

`;