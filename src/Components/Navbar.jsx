import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link component
import { UserButton, useUser } from '@clerk/clerk-react';

const Navbar = () => {
  const { user, isLoading } = useUser();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  return (
    <NavBar>
      <NavLogo src="/path/to/logo.png" alt="FarmLink" to="/" /> {/* Use 'to' instead of 'href' */}
      <NavItems>
        <NavItem to="/help">Help</NavItem> {/* Use Link for internal navigation */}
        <NavItem to="/faq">FAQ</NavItem>
        <NavItem to="/community">Community</NavItem>
        {user ? (
          <UserMenuContainer show={showUserMenu}>
            <UserButton />
          </UserMenuContainer>
        ) : (
          <NavItem to="/login">Login</NavItem>
        )}
        <NavItem to="/contact">Contact Us</NavItem>
      </NavItems>
    </NavBar>
  );
};

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #52616B;
  color: white;
  padding: 1rem;
  height: 2rem;
`;

const NavLogo = styled.img`
  width: 100px;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const NavItem = styled(Link)`
  color: #ffffff;
  margin-right: 1rem;
  cursor: pointer;
  text-decoration: none;
`;

const UserAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
`;

const UserMenuContainer = styled.div`
  position: relative;
`;

export default Navbar;
