import React, { FC, useState } from "react";
import styled from "styled-components";
import st from "../../styles";
import { vector1 } from "../../assets/images/clientsReviews";
import ClientsSlider from "./ClientsSlider";
import ClientImage from "./ClientImage";
import ClientsBgElements from "./ClientsBgElements";

const ClientsReviews: FC = () => {
  const [clientId, setClientId] = useState(0);

  return (
    <Wrapper>
      <div className="container">
        <div className="heading-container">
          <h2>What our client says</h2>
          <img src={vector1} alt="vector-1" className="vector-1" />
        </div>
        <div className="slider-container">
          <ClientImage clientId={clientId} />
          <ClientsSlider setClientId={setClientId} />
        </div>
        <ClientsBgElements />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 80px 0;
  overflow: hidden;

  .container {
    position: relative;
  }

  .heading-container {
    margin-bottom: 30px;
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
      transform: translateX(-200px);
      opacity: 0.5;
      z-index: 0;
    }
  }

  @media screen and (min-width: ${st.breakpoints.md}) {
    padding-top: 120px;

    .heading-container {
      margin-bottom: 70px;

      .vector-1 {
        width: 176px;
        height: 35px;
        top: 39px;
        transform: translateX(-150px);
        opacity: 1;
      }
    }
  }

  @media screen and (min-width: ${st.breakpoints.lg}) {
    padding-top: 173px;
    padding-bottom: 140px;

    .heading-container {
      margin-bottom: 116px;
      text-align: center;

      .vector-1 {
        transform: translateX(50px);
      }
    }

    .slider-container {
      display: flex;

      & > div:first-child {
        flex-shrink: 0;
      }
    }
  }
`;

export default ClientsReviews;
