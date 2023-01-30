import { Outlet } from "react-router-dom";
import {
  MainLogo,
  NavigationContainer,
  NavItem,
  NavItemsContainer,
} from "./navigation.style";

const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <MainLogo>Matrimony</MainLogo>
        <NavItemsContainer>
          <NavItem to={"/"}>Home</NavItem>
          <NavItem to={"/signin"}>Sign in</NavItem>
          <NavItem to={"/signup"}>Sign up</NavItem>
          <NavItem to={"/about"}>About</NavItem>
          <NavItem to={"/admin"}>Admin</NavItem>
        </NavItemsContainer>
      </NavigationContainer>
      <Outlet />
    </>
  );
};
export default Navigation;
