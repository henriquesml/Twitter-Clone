import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar'

export const Wrapper = styled.div`
  background: #F1F1F1;
  display: flex;
  flex-direction: column;

  .wrapper{
    display: flex;
    justify-content: space-between;
    max-width: 1170px;
    padding: 0 30px;
    margin: 0 auto;
    width: 100%;
  }
`;

export const Content  = styled.div`
  display: flex;
  margin-top: 46px !important;
  height: calc(100% - 46px) !important;
`;

export const TimeLine  = styled.section`
  width: 540px;
  margin-left: calc(260px + 25px);
`;

export const Scroll = styled(PerfectScrollbar)`
  height: 100vh;

`