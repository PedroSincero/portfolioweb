import styled from 'styled-components';
import { textSecondaryColor, textPrimaryColor } from '../../styles/Global';

export const Testmonials = styled.div`
  background-color: transparent;
  height: 85vh;
  color: ${textPrimaryColor};
  h1 {
    font-size:50px;
    text-align: center;
  }
`;

export const AboutMe = styled.div`
  display: flex;
`;

export const Left = styled.div`
  flex: 0.5;
  background-color: blue;
  text-align: center;
  img {
    border: 4px solid;
    border-radius: 4px;
    width: 45%;
  }
`;

export const Right = styled.div`
  background-color: red;
  flex: 0.5;
`;