import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import {
  alarm,
  clipboard,
  vector1,
  vector2,
  vector3,
  vector4,
  vector5,
  vector6,
  mobile1,
  mobile2,
} from "../../assets/images/hero/index";
import st from "../../styles";

const HeroBgElements: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
        window.removeEventListener("scroll", handler);
      }
    };
    window.addEventListener("scroll", handler);
  }, []);

  return (
    <Wrapper>
      <img
        src={alarm}
        alt="bg-element"
        className={`element alarm ${isScrolled ? "scrolled" : ""}`}
      />
      <img
        src={vector1}
        alt="bg-element"
        className={`element vector-1 ${isScrolled ? "scrolled" : ""}`}
      />
      <img
        src={vector2}
        alt="bg-element"
        className={`element vector-2 ${isScrolled ? "scrolled" : ""}`}
      />
      <img
        src={vector3}
        alt="bg-element"
        className={`element vector-3 ${isScrolled ? "scrolled" : ""}`}
      />
      <img
        src={vector4}
        alt="bg-element"
        className={`element vector-4 ${isScrolled ? "scrolled" : ""}`}
      />
      <img
        src={vector5}
        alt="bg-element"
        className={`element vector-5 ${isScrolled ? "scrolled" : ""}`}
      />
      <img
        src={vector6}
        alt="bg-element"
        className={`element vector-6 ${isScrolled ? "scrolled" : ""}`}
      />
      <img
        src={mobile1}
        alt="bg-element"
        className={`element mobile-1 ${isScrolled ? "scrolled" : ""}`}
      />
      <img
        src={mobile2}
        alt="bg-element"
        className={`element mobile-2 ${isScrolled ? "scrolled" : ""}`}
      />
      <img
        src={clipboard}
        alt="bg-element"
        className={`element clipboard ${isScrolled ? "scrolled" : ""}`}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .element {
    position: absolute;
    z-index: -1;
    user-select: none;
  }

  .vector-5,
  .vector-6,
  .mobile-1,
  .clipboard {
    display: none;
  }

  .alarm {
    width: 65px;
    height: 76px;
    left: 225px;
    top: -40px;

    &.scrolled {
      animation: move-1 4s linear infinite alternate;
    }
  }

  .vector-1 {
    right: -37px;
    top: -22px;

    &.scrolled {
      animation: flip-1 4s linear infinite alternate;
    }
  }

  .vector-2 {
    left: 86px;
    top: 68px;

    &.scrolled {
      animation: flip-1 4s linear 0.2s infinite alternate;
    }
  }

  .vector-3 {
    right: 40px;
    bottom: 40px;

    &.scrolled {
      animation: flip-2 2s ease-in infinite alternate;
    }
  }

  .vector-4 {
    left: -35px;
    bottom: 20px;

    &.scrolled {
      animation: flip-1 4s linear 0.4s infinite alternate;
    }
  }

  .mobile-2 {
    display: none;
  }

  @keyframes move-1 {
    0% {
      transform: translate(0, 0);
    }

    25% {
      transform: translate(50%, 0);
    }

    50% {
      transform: translate(0, 50%);
    }

    75% {
      transform: translate(25%, 50%);
    }

    100% {
      transform: translate(0, 0);
    }
  }

  @keyframes flip-1 {
    0% {
      transform: rotateZ(0);
    }

    25% {
      transform: rotateZ(7deg);
    }

    50% {
      transform: rotateZ(0);
    }

    75% {
      transform: rotateZ(-7deg);
    }

    100% {
      transform: rotateZ(0);
    }
  }

  @keyframes flip-2 {
    0% {
      transform: rotateZ(0);
    }

    100% {
      transform: rotateZ(15deg);
    }
  }

  @media screen and (min-width: ${st.breakpoints.xs}) {
    .alarm {
      left: 250px;
      top: 23px;
    }

    .vector-2 {
      top: 90px;
    }
  }

  @media screen and (min-width: ${st.breakpoints.md}) {
    .mobile-2 {
      display: block;
      width: 307px;
      height: 617px;
      right: -340px;
      top: 15px;
    }
  }

  @media screen and (min-width: ${st.breakpoints.lg}) {
    .alarm {
      width: 135px;
      height: 157px;
      left: -100px;
      top: -100px;
    }

    .vector-1 {
      width: 84px;
      height: 134px;
      top: -55px;
    }

    .vector-2 {
      width: 176px;
      height: 35px;
      top: 145px;
      left: 32px;
    }

    .vector-3 {
      width: 119px;
      height: 107px;
      top: 300px;
      right: 60px;
    }

    .vector-4 {
      width: 53px;
      height: 62px;
    }
  }

  @media screen and (min-width: ${st.breakpoints.xl}) {
    .vector-5,
    .vector-6,
    .mobile-1,
    .clipboard {
      display: block;
    }

    .mobile-1 {
      width: 338px;
      height: 680px;
      left: -400px;
      top: 80px;
      transform: rotate(-15deg);
    }

    .mobile-2 {
      width: 460px;
      height: 926px;
      right: -570px;
      top: 82px;
      transform: rotate(15deg);
    }

    .clipboard {
      width: 178px;
      height: 191px;
      right: -80px;
      bottom: 375px;
    }

    .vector-1 {
      top: -220px;
      right: -580px;
    }

    .vector-3 {
      top: 385px;
      right: 45px;
    }

    .vector-4 {
      bottom: 30%;
      left: 17%;
      fill: #d26d60;
    }

    .vector-5 {
      left: -240px;
      top: -130px;
    }

    .vector-6 {
      right: -245px;
      top: -85px;
    }
  }
`;

export default HeroBgElements;
