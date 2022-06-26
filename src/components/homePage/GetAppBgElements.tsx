import React, { FC } from "react";
import styled from "styled-components";
import { hand1, hand2, mobile } from "../../assets/images/getApp";
import st from "../../styles";

const GetAppBgElements: FC = () => {
  return (
    <Wrapper>
      <img src={hand1} alt="hand-1" className="hand-1" />
      <img src={hand2} alt="hand-2" className="hand-2" />
      <img src={mobile} alt="mobile" className="mobile" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .hand-1,
  .hand-2,
  .mobile {
    position: absolute;
    z-index: 0;
  }

  .hand-1,
  .mobile {
    display: none;
  }

  .hand-2 {
    width: 119px;
    height: 60px;
    right: 0;
    bottom: 150px;
  }

  @media screen and (min-width: ${st.breakpoints.xs}) {
    .hand-2 {
      display: none;
    }
  }

  @media screen and (min-width: ${st.breakpoints.md}) {
    .mobile {
      display: block;
      left: 65%;
      top: 50px;
    }
  }

  @media screen and (min-width: ${st.breakpoints.xl}) {
    .container {
      position: relative;
      overflow: visible;
    }

    .mobile {
      left: auto;
      right: 125px;
      top: -148px;
    }

    .hand-1,
    .hand-2 {
      display: block;
    }

    .hand-1 {
      width: 396px;
      height: 156px;
      transform: rotate(29deg);
      top: -145px;
      left: -410px;
    }

    .hand-2 {
      width: 471px;
      height: 218px;
      top: 45px;
      right: -375px;
    }
  }
`;

export default GetAppBgElements;
