import styled from 'styled-components';
import { darken } from 'polished'

export const Container = styled.li`
  height: 150px;
  max-height: 200px;
  margin-bottom: 2px;
  background: #111;
  border-top: 1px solid #111;
  
`;

export const Header = styled.header`
  height: 35px;
  display: flex;
  align-items: center;
  padding: 15px;
`;

export const Author = styled.strong`
  color: #DDD;
`;

export const CurrentDate = styled.h2`
  color: #CCC;
  font-size: 14px;
  font-weight: 100;

`;

export const Content= styled.div`
  display: flex;
  height: calc(100% - 70px);
  padding-left: 15px;
  align-items: center;
  color: #AAA;
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

  svg{
    transition: 0.2s color;
    :hover {
      color: #eb254b !important;
    }
  }

  svg {
    margin-right: 5px;
  }
`;

export const LikeNumber  = styled.h2`
  font-size: 14px;
  color: #697882;

  :hover {
    color: ${darken(0.03, '#697882')};
  }


`;