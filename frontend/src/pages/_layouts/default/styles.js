import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar'

export const Wrapper = styled.div`
  background: #222;
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

export const Profile  = styled.aside`
  width: 260px;
  border-right: 1px solid #111;
  height:100%;
  position: fixed;
`;

export const TimeLine  = styled.section`
  width: 540px;
  margin-left: calc(260px + 25px);
`;

export const Widgets  = styled.aside`
  width: 260px;
  border-left: 1px solid #111;
  position: fixed;
  margin-left: calc(260px + 50px + 540px);
  height:100%;
`;


export const Scroll = styled(PerfectScrollbar)`
  height: 100vh;

`