import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import {
  Container,
  Header,
  HeaderContainer,
  HeaderNavLink,
} from './Layout.styled';
export const Layout = () => {
  return (
    <Container>
        <nav>
          <HeaderContainer>
            <HeaderNavLink aria-current="page" to="/">
              Home
            </HeaderNavLink>
            <HeaderNavLink to="/movies">Movies</HeaderNavLink>
          </HeaderContainer>
        </nav>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
