import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer.component";
import {
  MainContainer,
  MainLogo,
  NavigationContainer,
  NavItem,
  NavItemsContainer,
} from "./navigation.style";

const Navigation = () => {
  return (
    <MainContainer>
      <NavigationContainer>
        <MainLogo>Matrimony</MainLogo>
        <NavItemsContainer>
          <NavItem to={"/"}>Home</NavItem>
          <NavItem to={"/signin"}>Sign in</NavItem>
          <NavItem to={"/signup"}>Sign up</NavItem>
          <NavItem to={"/about"}>About</NavItem>
        </NavItemsContainer>
      </NavigationContainer>
      <Outlet />
      <Footer />
    </MainContainer>
  );
};
export default Navigation;
