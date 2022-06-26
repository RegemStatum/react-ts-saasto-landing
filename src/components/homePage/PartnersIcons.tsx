import React, { FC } from "react";
import styled from "styled-components";
import {
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
} from "../../assets/images/partners";
import st from "../../styles";

const PartnersIcons: FC = () => {
  return (
    <Wrapper>
      <div className="inner-container">
        <div className="icon-container icon-1-container">
          <img src={partner1} alt="partner-1" />
        </div>
        <div className="icon-container icon-2-container">
          <img src={partner2} alt="partner-2" />
        </div>
        <div className="icon-container icon-3-container">
          <img src={partner3} alt="partner-3" />
        </div>
        <div className="icon-container icon-4-container">
          <img src={partner4} alt="partner-4" />
        </div>
        <div className="icon-container icon-5-container">
          <img src={partner5} alt="partner-5" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-width: 300px;
  width: 80%;

  .inner-container {
    display: grid;
    /* position: absolute; */
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: ${st.indentations.ind_800};
  }

  .icon-container {
    padding: ${st.indentations.ind_1100};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${st.borderRadiuses.br_1};

    img {
      width: 64px;
      height: 64px;
    }
  }

  .icon-1-container {
    background-color: ${st.colors.sp_9};
  }

  .icon-2-container {
    background-color: ${st.colors.sp_10};
  }

  .icon-3-container {
    background-color: ${st.colors.sp_11};
  }

  .icon-4-container {
    background-color: ${st.colors.sp_12};
  }

  .icon-5-container {
    display: none;
    background-color: ${st.colors.sp_13};
  }

  @media screen and (min-width: ${st.breakpoints.md}) {
    display: block;
    position: relative;

    & > .inner-container {
      position: relative;
      width: 800px;
      height: 651px;
    }

    .icon-container {
      width: max-content;
      border-radius: ${st.borderRadiuses.br_3};
      position: absolute;
    }

    .icon-1-container {
      padding: 76px 136px;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      background-color: rgba(255, 186, 0, 0.1);

      img {
        width: 87px;
        height: 87px;
      }
    }

    .icon-2-container {
      padding: 52px 96px;
      top: 0;
      left: 117px;
      background-color: rgba(243, 83, 37, 0.1);

      img {
        width: 48px;
        height: 48px;
      }
    }

    .icon-3-container {
      padding: 66px 122px;
      top: 88px;
      right: 68px;
      background-color: rgba(51, 214, 100, 0.1);

      img {
        width: 72px;
        height: 72px;
      }
    }

    .icon-4-container {
      padding: 72px 135px;
      bottom: 57px;
      right: 0;
      background-color: rgba(66, 133, 244, 0.1);

      img {
        width: 114px;
        height: 99px;
      }
    }

    .icon-5-container {
      display: block;
      padding: 52px 96px;
      bottom: 0;
      left: 117px;
      background-color: rgba(28, 96, 191, 0.1);

      img {
        width: 48px;
        height: 48px;
      }
    }
  }

  @media screen and (min-width: ${st.breakpoints.xl}) {
    position: absolute;
    top: 110px;
    left: -300px;
    z-index: 0;
  }
`;

export default PartnersIcons;
