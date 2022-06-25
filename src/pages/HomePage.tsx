import React, { FC } from "react";
import styled from "styled-components";
import CompanyPros from "../components/homePage/CompanyPros";
import Features from "../components/homePage/Features";
import Hero from "../components/homePage/Hero";

const HomePage: FC = () => {
  return (
    <Wrapper>
      <Hero />
      <CompanyPros />
      <Features />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default HomePage;
