import styled from 'styled-components';
import mainColor from '../../styles/Global';

export const Menu = styled.div`
  width: 300px;
  height: 100vh;
  background-color: ${mainColor};
  position: fixed;
  top: 0;
  right: -300px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 1s ease;

  &.active {
    right: 0;
  }

  ul{
    margin: 0;
    /* padding: 0; */
    list-style: none;
    font-size: 30px;
    font-weight: 300;
    color: white;
    width: 60%;
  }

  li {

    margin-bottom: 25px;
    a {
        font-size: inherit;
        color: inherit;
        text-decoration: none;
    }
    &:hover {
      font-weight: bold;
    }
  }
`;