import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar'

export const Wrapper = styled.div`
  background: #333;
  display: flex;
  flex-direction: column;
`;

export const Content  = styled.div`
  height: calc(100% - 65px);
`;

export const Scroll = styled(PerfectScrollbar)`
  height: 100vh;

`