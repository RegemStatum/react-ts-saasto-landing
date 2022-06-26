import React, { FC } from "react";
import styled from "styled-components";
import { Hero, CompanyPros, Features, Analytics } from "../components/homePage";
import TrackerWork from "../components/homePage/TrackerWork";
import UsageOptions from "../components/homePage/UsageOptions";

const HomePage: FC = () => {
  return (
    <Wrapper>
      <Hero />
      <CompanyPros />
      <Features />
      <Analytics />
      <TrackerWork />
      <UsageOptions />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default HomePage;
