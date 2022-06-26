import React, { FC } from "react";
import styled from "styled-components";
import { hand, sandWatch, vector2 } from "../../assets/images/usageOptions";
import st from "../../styles";

const UsageOptionsBgElements: FC = () => {
  return (
    <Wrapper>
      <img src={hand} alt="hand" className="hand" />
      <img src={sandWatch} alt="sand-watch" className="sand-watch" />
      <img src={vector2} alt="vector-2" className="vector-2" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .hand,
  .sand-watch,
  .vector-2 {
    display: none;
  }

  @media screen and (min-width: ${st.breakpoints.xl}) {
    .hand,
    .sand-watch,
    .vector-2 {
      display: block;
      position: absolute;
    }

    .hand {
      left: -550px;
      bottom: 20px;
    }

    .sand-watch {
      top: 175px;
      right: -120px;
      z-index: -1;
    }

    .vector-2 {
      top: 290px;
      right: -160px;
      z-index: -2;
    }
  }
`;

export default UsageOptionsBgElements;
