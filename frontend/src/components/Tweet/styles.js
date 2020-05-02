import styled from 'styled-components';

export const Container = styled.li`
  height: 100px;
  max-height: 200px;
  margin-bottom: 20px;
  background: #FFF;
  border-top: 1px solid #eee;
  border-radius: 4px;
  
`;

export const Header = styled.header`
  height: 35px;
  display: flex;
  align-items: center;
  padding: 15px;
`;

export const Author = styled.strong`
  color: #333;
`;

export const CurrentDate = styled.h2`
  color: #333;
  font-size: 14px;
  font-weight: 100;

`;

export const Content= styled.div`
  display: flex;
  height: calc(100% - 70px);
  padding-left: 15px;
  align-items: center;
`;

export const ContentPost = styled.p`
  font-size: 14px;
  line-height: 20px;
`;

export const Footer = styled.footer`
  height: 35px;
  display: flex;
  align-items: center;
  padding-left: 15px;
`;

export const Like = styled.button`
  border: 0;
  background: transparent;

  display: flex;
  align-items: center;
  color: #697882;
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }

  img {
    margin-right: 5px;
  }
`;