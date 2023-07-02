import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Header = styled.header`
  border-bottom: solid 1px grey;
  margin-bottom: 20px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 25px;
  background-color: #93ec90;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  border-bottom: 1px solid #000;
`;

export const HeaderNavLink = styled(NavLink)`
  color: #0f0e0e;
  font-size: 20px;

  text-decoration: none;

  cursor: pointer;
  &:hover,
  &:focus {
    color: #ffffff;
  }
`;
