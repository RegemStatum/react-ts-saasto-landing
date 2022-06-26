import React, { FC } from "react";
import styled from "styled-components";
import st from "../../styles";
import { vector1 } from "../../assets/images/clientsReviews";

const ClientsReviews: FC = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="heading-container">
          <h2>What our client says</h2>
          <img src={vector1} alt="vector-1" className="vector-1" />
        </div>
        <p>FINISH THE SLIDER</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 80px 0;

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
      top: 13px;
      left: 50%;
      transform: translateX(-50px);
      opacity: 0.5;
      z-index: 0;
    }
  }

  @media screen and (min-width: ${st.breakpoints.md}) {
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
  }
`;

export default ClientsReviews;
