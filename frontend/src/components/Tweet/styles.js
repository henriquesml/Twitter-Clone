import styled from 'styled-components';
import { darken } from 'polished'

export const Container = styled.li`
  height: 150px;
  max-height: 200px;
  margin-bottom: 15px;
  border-radius: 4px;
  background: #FFF;
  border: 1px solid #DDD;

`;

export const Header = styled.header`
  height: 35px;
  display: flex;
  align-items: center;
  padding: 15px;
`;

export const Author = styled.strong`
  color: #555;
`;

export const CurrentDate = styled.h2`
  color: #999;
  font-size: 12px;
  font-weight: 100;

`;

export const Content= styled.div`
  display: flex;
  height: calc(100% - 70px);
  padding: 0 15px;
  align-items: center;
  color: #333;
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
  color: #999;

  :hover {
    color: ${darken(0.03, '#999')};
  }


`;