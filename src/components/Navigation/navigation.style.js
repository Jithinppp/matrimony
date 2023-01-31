import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 10fr 1fr;
  min-height: 100vh;
`;

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const MainLogo = styled.h1`
  font-family: "Playfair Display", serif;
  letter-spacing: -0.5px;
`;
export const NavItemsContainer = styled.div`
  display: flex;
`;
export const NavItem = styled(Link)`
  text-decoration: none;
  color: inherit;
  margin: 0 3px;
  transition: all 0.3s ease;
  padding: 0.2rem 1rem;
  border-radius: 2px;
  &:hover {
    color: white;
    background-color: #404040;
  }
`;
