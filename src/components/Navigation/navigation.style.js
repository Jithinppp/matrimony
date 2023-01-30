import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.nav`
  background-color: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const MainLogo = styled.h1`
  color: green;
`;
export const NavItemsContainer = styled.div`
  display: flex;
`;
export const NavItem = styled(Link)`
  text-decoration: none;
  color: inherit;
  margin: 0 10px;
`;
