import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Link = styled(NavLink)`
  align-items: center;
  padding: 10px;
  border-radius: 10%;
  text-decoration: none;
  color: #0e0e9c;
  cursor: pointer;

  &.active {
    background: #7082e3b3;
    color: #43282d;
  }
`;
