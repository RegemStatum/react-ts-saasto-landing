import React, { FC } from "react";
import styled from "styled-components";
import {
  vector1,
  appStore,
  googlePlay,
  hand2,
} from "../../assets/images/getApp";
import st from "../../styles";
import Button from "../ui/buttons/Button";
import GetAppBgElements from "./GetAppBgElements";

const GetApp: FC = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="heading-container">
          <h2>Get it now for free</h2>
          <img src={vector1} alt="vector-1" className="vector-1" />
        </div>
        <p className="description">
          We are offering free debit cards once you sing up and order a card. we
          wont chargeyou for our debit card.
        </p>
        <div className="btns">
          <Button onClick={null} className="btn btn-1">
            <img src={appStore} alt="app-store" />
          </Button>
          <Button onClick={null} className="btn btn-2" view="secondary">
            <img src={googlePlay} alt="app-store" />
          </Button>
        </div>
        <GetAppBgElements />
      </div>
      {/* <img src={hand2} alt="hand-2" className="hand-2"/> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: ${st.indentations.ind_1600} 0;
  background-color: ${st.colors.bg_1};
  position: relative;

  .heading-container {
    margin-bottom: ${st.indentations.ind_500};
    position: relative;
    text-transform: capitalize;

    h2 {
      position: relative;
      z-index: 1;
    }

    .vector-1 {
      width: 116px;
      height: 23px;
      position: absolute;
      top: 17px;
      left: 50%;
      transform: translateX(-70px);
      opacity: 0.5;
      z-index: 0;
    }
  }

  .description {
    margin-bottom: ${st.indentations.ind_1100};
  }

  .btn {
    display: block;
  }

  .btn-1 {
    margin-bottom: ${st.indentations.ind_800};
  }

  @media screen and (min-width: ${st.breakpoints.xs}) {
    .heading-container {
      .vector-1 {
        left: 80px;
      }
    }

    .btns {
      display: flex;
      gap: ${st.indentations.ind_800};

      .btn-1 {
        margin-bottom: 0;
      }
    }
  }

  @media screen and (min-width: ${st.breakpoints.md}) {
    padding: ${st.indentations.ind_2000} 0;
    overflow: hidden;

    .container {
      position: relative;
    }

    .heading-container {
      margin-bottom: 20px;

      .vector-1 {
        width: 176px;
        height: 35px;
        top: 39px;
        transform: translateX(-25px);
        opacity: 1;
      }
    }

    .description {
      max-width: 450px;
      margin-bottom: ${st.indentations.ind_1600};
    }

    .btn {
      margin-bottom: ${st.indentations.ind_1800};
    }

    .btn-2 {
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: ${st.breakpoints.lg}) {
    .description {
      max-width: 529px;
    }
  }

  @media screen and (min-width: ${st.breakpoints.xl}) {
    padding-top: 248px;
    padding-bottom: 139px;
  }
`;

export default GetApp;
