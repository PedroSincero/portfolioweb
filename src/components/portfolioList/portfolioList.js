import styled from 'styled-components';
import {textPrimaryColor, textSecondaryColor} from '../../styles/Global';

export const PortfolioList = styled.li`
  font-size: 12px;
  margin-right: 50px;
  padding: 7px;
  border-radius: 10px;
  cursor: pointer;
  color: ${textPrimaryColor};

  &.active {
    background-color: ${textSecondaryColor};
    color: ${textPrimaryColor}
  }
`