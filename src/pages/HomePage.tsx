import React, { FC } from "react";
import styled from "styled-components";
import { Hero, CompanyPros, Features, Analytics } from "../components/homePage";

const HomePage: FC = () => {
  return (
    <Wrapper>
      <Hero />
      <CompanyPros />
      <Features />
      <Analytics />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default HomePage;
