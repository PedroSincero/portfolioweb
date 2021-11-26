import styled from 'styled-components';
import mainColor from '../../styles/Global';

export const Topbar = styled.div`
  width: 100%;
  height: 70px;
  background-color: white;
  color: ${mainColor};
  position: fixed;
  top: 0;
  z-index: 2; // ordem de prioridade
  transition: all 1s ease;

  .wrapper{
    padding: 10px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left{
      display: flex;
      align-items: center;

      .logo{
        font-size: 40px;
        font-weight: 700;
        text-decoration: none;
        color: inherit; // herdar cor do pai
        margin-right: 40px;
      }

      .itemContainer{
        display: flex;
        align-items: center;
        margin-left: 30px;

        .icon{
          font-size: 18px;
          margin-right: 5px;
        }

        span{
          font-size: 15px;
          font-weight: 500;
        }
      }
    }

    .right{

      .hamburguer{
        width: 32px;
        height: 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;

        span{
          width: 100%;
          height: 3px;
          background-color: ${mainColor};
          transform-origin: left;
          transition: all 2s ease;
        }
      }
    }
  }

  &.active{
    background-color: ${mainColor};
    color: white;

    .hamburguer{
      span{
        &:first-child{
          background-color: white;
          transform: rotate(45deg);
        }
        &:nth-child(2){
          opacity: 0;
        }
        &:last-child{
          background-color: white;
          transform: rotate(-45deg);
        }
      }
    }
  }
`;