import { HeaderContainer, HeaderNavLink } from './Header.styled';

const Header = () => {
    return (
      <nav>
        <HeaderContainer>
              <HeaderNavLink
                aria-current="page"
                to="/"
              >
                Home
              </HeaderNavLink>
              <HeaderNavLink to="/movies">
                Movies
              </HeaderNavLink>
        </HeaderContainer>
      </nav>
    );
}

export default Header;