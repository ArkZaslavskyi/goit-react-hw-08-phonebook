import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  display: inline-block;
  padding: 12px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 700;
  color: #2a2a2a;

  &.active {
    color: red;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: chocolate;
  }
`;
