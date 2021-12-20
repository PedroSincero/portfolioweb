import styled from 'styled-components';
import { textSecondaryColor, textPrimaryColor } from '../../styles/Global'

export const Portfolio = styled.div`
  background-color: transparent;
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${textPrimaryColor};
  h1{
    font-size: 50px;
  }

  ul{
    margin: 10px;
    padding: 0;
    list-style: none;
    display: flex;

  }
`;

export const Container = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  .item {
    width: 220px;
    height: 150px;
    border-radius: 20px;
    border: 1px solid lightgrey;
    margin: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${textPrimaryColor};
    position: relative;
    transition: all 0.5s ease;

    h3{
      position: absolute;
      font-size: 20px;
    }

    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 1;
    }

    &:hover{
      background-color: ${textSecondaryColor};
      img{
        opacity: 0.2;
        z-index: 0;
      }
    }
  }
`;