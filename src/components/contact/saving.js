import styled from 'styled-components';

export const Contact = styled.div`
  background-color: white;
  display: flex;

`;

export const Left = styled.div`
    flex: 1;
    overflow: hidden;

    img{
      height: 100%;
    }
`;

export const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2{
      /* color: white;
      font-size: 30px; */
      text-align: center;
      margin: 0 auto;
      padding: 40px 0;
      font: 300 60px 'Oswald', sans-serif;
      color: black;
      text-transform: uppercase;
      letter-spacing: 6px;
    }

    form{
      width: 70%;
      height: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      input{
        width: 300px;
        height: 30px;
        font-size: 14px;
        border-radius: 10px;
        border: none;
        color: #fff;
        background-color: #000;
      }

      textarea{
        width: 300px;
        height: 200px;
        font-size: 14px;
        background-color: #000;
        color: #fff;
        letter-spacing: 1px;
        border-radius: 10px;
        border: none;
      }

      button{
        width: 150px;
        height: 30px;
        color: white;
        background-color: crimson;
        border: none;
        border-radius: 10px;
        font-weight: 500px;
        cursor: pointer;

        &:focus{
          outline: none;
        }
      }
    }
`;