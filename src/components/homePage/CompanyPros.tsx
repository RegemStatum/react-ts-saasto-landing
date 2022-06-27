import React, { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import st from "../../styles";
import { rocket } from "../../assets/images/features";

const CompanyPros: FC = () => {
  const [scrolledHeight, setScrolledHeight] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const rocketRef = useRef<HTMLImageElement>(null);

  // check is section visible
  useEffect(() => {
    const visibilityHandler = () => {
      let sectionRect = sectionRef.current?.getBoundingClientRect();
      if (!sectionRect) {
        return;
      }
      let topPos = sectionRect.top;
      let botPos = sectionRect.bottom;
      let scrolledHeight = window.scrollY;

      if (topPos >= 0 && botPos <= window.innerHeight) {
        setScrolledHeight(scrolledHeight);
        window.removeEventListener("scroll", visibilityHandler);
      }
    };
    window.addEventListener("scroll", visibilityHandler);
  }, []);

  // move rocket
  useEffect(() => {
    const handleMoveRocket = () => {
      if (scrolledHeight) {
        let curScrolledHeight = window.scrollY - scrolledHeight;
        let rocketBottom = curScrolledHeight > 0 ? 80 + curScrolledHeight : 80;
        let rocketLeft = curScrolledHeight > 0 ? -25 + curScrolledHeight : -25;

        if (rocketLeft > window.innerWidth) {
          rocketRef.current!.style.display = "none";
          window.removeEventListener("scroll", handleMoveRocket);
        }

        rocketRef.current!.style.bottom = `${rocketBottom}px`;
        rocketRef.current!.style.left = `${rocketLeft}px`;
      }
    };
    if (window.innerWidth < 768) {
      window.addEventListener("scroll", handleMoveRocket);
    }

    return () => {
      window.removeEventListener("scroll", handleMoveRocket);
    };
  }, [scrolledHeight]);

  return (
    <Wrapper ref={sectionRef}>
      <div className="inner-container">
        <div className="item-container">
          <p>15k+</p>
          <span>Active user</span>
        </div>
        <div className="item-container">
          <p>30k</p>
          <span>Total Download</span>
        </div>
        <div className="item-container">
          <p>10k</p>
          <span>Customer</span>
        </div>
      </div>

      <img src={rocket} ref={rocketRef} alt="rocket" className="rocket" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  padding: ${st.indentations.ind_1600};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  z-index: 1;

  .rocket {
    width: 100px;
    height: 92px;
    position: absolute;
    bottom: 80px;
    left: -25px;
    z-index: -1;
  }

  .item-container {
    max-width: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    &:not(:last-of-type) {
      margin-bottom: ${st.indentations.ind_1600};
      border-bottom: 1px solid rgba(30, 12, 62, 0.2);

      span {
        margin-bottom: ${st.indentations.ind_1600};
      }
    }

    p {
      margin-bottom: ${st.indentations.ind_1100};
      font-family: "Poppins", sans-serif;
      font-size: ${st.fontSizes.fs_1100};
      font-weight: 600;
      line-height: ${st.fontSizes.fs_1100};
      color: ${st.colors.nt_4};
    }

    span {
      font-size: ${st.fontSizes.fs_500};
      line-height: ${st.fontSizes.fs_500};
      color: rgba(64, 64, 64, 0.6);
    }
  }

  @media screen and (min-width: ${st.breakpoints.md}) {
    padding: ${st.indentations.ind_2000};
    .inner-container {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }

    .item-container:not(:last-of-type) {
      margin-bottom: 0;
      border-bottom: none;

      span {
        margin-bottom: 0;
      }
    }

    .rocket {
      width: 197px;
      height: 183px;
      bottom: -270px;
      left: auto;
      right: -50px;
    }
  }

  @media screen and (min-width: ${st.breakpoints.xl}) {
    width: 75%;
    margin-top: -184px;
    padding-top: 94px;
    padding-bottom: 22px;
    background-color: #fff;
    border-top-right-radius: 80px;
    overflow: visible;

    &::after {
      content: "";
      display: block;
      width: 112px;
      height: 162px;
      position: absolute;
      right: 23px;
      bottom: 18px;
      transform: translateX(100%);
      background-color: #fff;
      clip-path: polygon(0 0, 100% 100%, 0 100%);
      z-index: 1;
    }

    .inner-container {
      max-width: 696px;
      justify-content: space-between;
    }

    .item-container {
      p {
        margin-bottom: 10px;
        font-size: ${st.fontSizes.fs_1000};
      }
    }

    .rocket {
      bottom: -365px;
      right: -240px;
    }
  }
`;

export default CompanyPros;
