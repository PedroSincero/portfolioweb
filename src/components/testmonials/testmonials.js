import styled from 'styled-components';
import { textSecondaryColor, textPrimaryColor } from '../../styles/Global';

export const Testmonials = styled.div`
  background-color: transparent;
  height: 85vh;
  color: ${textPrimaryColor};
  h1 {
    font-size:50px;
    text-align: center;
    margin-bottom: 1vh;
  }
`;

export const AboutMe = styled.div`
  display: flex;
`;

export const Left = styled.div`
  flex: 0.5;
  text-align: center;
  margin: 2vh;
  img {
    border: 4px solid;
    border-radius: 4px;
    width: 45%;
    margin-top: 10vh;
  }
`;

export const Right = styled.div`
  background-color: red;
  flex: 0.5;
`;