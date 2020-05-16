import styled from 'styled-components';

export const Container = styled.aside`
  width: 260px;
  position: fixed;
  margin-left: calc(260px + 50px + 540px);
  height:100%;

  div.topics{
    width: 100%;
    height: calc(100% - 65px);
    margin-top: 10px;
    border-radius: 4px;
    border: 1px solid #DDD;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #FFF;

    h1{
      width: 100%;
      line-height: 40px;
      text-align: center;
      
      color: #333;
      border-bottom: 1px solid #DDD;
    }

    div.posts{
      width: 100%;
      display: flex;
      flex-direction: column;
      
      
      .post{
        border-bottom: 1px solid #DDD;
        line-height: 40px;
        display: flex;
        justify-content: space-between;
        padding: 0 15px;
        h2{
          color: #4bb0ee;
          font-weight: 600;
          font-size: 14px;
        }

        h3{
          color: #555;
          font-weight: 200;
          font-size: 12px;
        }
      }

      
    }
  }
`;