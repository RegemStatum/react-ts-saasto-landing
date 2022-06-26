import React, { FC } from "react";
import styled from "styled-components";
import { Hero, CompanyPros, Features, Analytics } from "../components/homePage";
import ClientsReviews from "../components/homePage/ClientsReviews";
import GetApp from "../components/homePage/GetApp";
import Partners from "../components/homePage/Partners";
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
      <Partners />
      <ClientsReviews />
      <GetApp />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default HomePage;
