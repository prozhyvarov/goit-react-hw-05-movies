import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1370px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 15px;
`;

export const Header = styled.header`
 border-radius: 5px;
  border: solid 2px rgb(71, 111, 255);
  margin-bottom: 20px;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 14px;
  margin-left: 10px;
  font-weight: 600;
  font-size: 22px;
  color: #191d1e;

  &:hover {
    color: #476fff;
  }
`;
