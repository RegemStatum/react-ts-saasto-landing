import React, { FC } from "react";
import styled from "styled-components";
import st from "../../styles";
import Button from "../ui/buttons/Button";
import HeroBgElements from "./HeroBgElements";

const Hero: FC = () => {
  return (
    <Wrapper>
      <div className="container inner-container">
        <HeroBgElements />
        <h1>A collaborative Time Tracking that you Need</h1>
        <p>
          An enim nullam tempor sapien gravida donec enim ipsum porta justo
          congue magna at pretium purus pretium ligula
        </p>
        <Button onClick={null}>Start 14 Days Trial</Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* margin is header height */
  margin-top: ${-86}px;
  padding-top: ${86 + 47}px;
  background-color: ${st.colors.bg_1};
  overflow: hidden;

  .inner-container {
    max-width: 480px;
    position: relative;
    z-index: 0;
  }

  h1 {
    max-width: 300px;
    margin-bottom: ${st.indentations.ind_600};
    font-size: 28px;
    font-weight: 700;
    line-height: 160%;
    color: ${st.colors.nt_1};
    text-transform: capitalize;
  }

  p {
    margin-bottom: ${st.indentations.ind_1400};
    line-height: 36px;
    color: ${st.colors.nt_2};
    opacity: 0.9;
  }

  button {
    margin-bottom: 85px;
  }

  @media screen and (min-width: ${st.breakpoints.xs}) {
    h1 {
      max-width: 100%;
      font-size: ${st.fontSizes.fs_900};
    }
  }

  @media screen and (min-width: ${st.breakpoints.lg}) {
    margin-top: ${-1 * 140}px;
    padding-top: ${140 + 130}px;

    .inner-container {
      max-width: 800px;
      text-align: center;
    }

    h1 {
      margin-bottom: ${st.indentations.ind_1000};
      font-size: ${st.fontSizes.fs_1100};
      line-height: 90px;
      text-transform: none;
    }

    p {
      max-width: 595px;
      margin: 0 auto ${st.indentations.ind_1800} auto;
      font-size: 20px;
      line-height: 36px;
      color: ${st.colors.nt_2};
      opacity: 0.9;
    }

    button {
      margin-bottom: 182px;
    }
  }

  @media screen and (min-width: ${st.breakpoints.xl}) {
    padding-top: ${140 + 180}px;

    button {
      margin-bottom: 390px;
    }
  }
`;

export default Hero;
