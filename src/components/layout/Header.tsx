import React, { FC } from "react";
import styled from "styled-components";
import st from "../../styles";
import { Logo } from "../ui";
import BurgerMenu from "../ui/layout/BurgerMenu";
import links from "../../constants/pageLinks";
import { Link } from "react-router-dom";
import Button from "../ui/buttons/Button";
import HeaderLinks from "./HeaderLinks";
import HeaderLoginBtns from "./HeaderLoginBtns";

const Header: FC = () => {
  return (
    <Wrapper className="container">
      <Logo />
      <div className="links-container">
        <HeaderLinks />
        <HeaderLoginBtns />
      </div>
      <BurgerMenu className="burger-menu" />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  padding: ${st.indentations.ind_1100} 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .links-container {
    display: none;
  }

  @media screen and (min-width: ${st.breakpoints.lg}) {
    padding: ${st.indentations.ind_1400} 0;

    .links-container {
      display: flex;
      flex: 1;
      justify-content: space-between;
      align-items: center;
    }

    .burger-menu {
      display: none;
    }
  }
`;

export default Header;
