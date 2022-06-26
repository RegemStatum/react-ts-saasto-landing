import React, { FC } from "react";
import styled from "styled-components";
import { darts, desk } from "../../assets/images/trackerWork";
import st from "../../styles";

const TrackerBgElements: FC = () => {
  return (
    <Wrapper>
      <img src={darts} alt="darts" className="element darts" />
      <img src={desk} alt="desk" className="element desk" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .element {
    position: absolute;
    top: 0;
    left: 0;
    display: none;
  }

  @media screen and (min-width: ${st.breakpoints.lg}) {
    .element {
      display: block;
    }

    .desk {
      width: 383px;
      height: 386px;
      left: -500px;
      top: 230px;
    }

    .darts {
      width: 375px;
      height: 352px;
      transform: rotate(11deg);
      top: -177px;
      left: auto;
      right: -540px;
    }
  }
`;

export default TrackerBgElements;
