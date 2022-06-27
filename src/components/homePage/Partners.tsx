import React, { FC } from "react";
import styled from "styled-components";
import { vector1 } from "../../assets/images/partners";
import st from "../../styles";
import Button from "../ui/buttons/Button";
import PartnersIcons from "./PartnersIcons";

const Partners: FC = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="info-container">
          <div className="heading-container">
            <h2>See Our trusted partners</h2>
            <img src={vector1} alt="vector-1" className="vector-1" />
          </div>
          <p className="description">
            Vero homero perfecto mei ut, sonet aperiam an nec. Ni nec dict
            altera legimu. Me vita de lege ndos expet end is ad. Ex mei omita
            aliu mi ando
          </p>
          <Button view="secondary" onClick={null} className="btn">
            Get Started
          </Button>
        </div>
        <PartnersIcons />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: ${st.indentations.ind_1900};
  position: relative;
  overflow: hidden;

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
    margin-bottom: ${st.indentations.ind_1400};
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

    .description {
      margin-bottom: ${st.indentations.ind_1600};
    }

    .btn {
      margin-bottom: ${st.indentations.ind_1800};
    }
  }

  @media screen and (min-width: ${st.breakpoints.xl}) {
    background-color: ${st.colors.bg_3};

    .container {
      position: relative;
    }

    .info-container {
      width: 525px;
      margin-left: 597px;
      padding: 248px 0 207px 0;

      .btn {
        background-color: ${st.colors.bg_3};
      }
    }

    .heading-container {
      .vector-1 {
        transform: translateX(-110px);
      }
    }
  }
`;

export default Partners;
