import React, { FC } from "react";
import styled from "styled-components";
import {
  mobile,
  vector1,
  icon1,
  icon2,
  icon3,
} from "../../assets/images/analytics";
import st from "../../styles";
import AnalyticsItem from "./AnalyticsItem";

const Analytics: FC = () => {
  return (
    <Wrapper>
      <img src={mobile} alt="mobile" className="mobile" />
      <div className="container info">
        <div className="heading-container">
          <h2>Analytics &#38; Reporting Brackdown</h2>
          <img src={vector1} alt="vector" className="vector-1" />
        </div>
        <p>
          An enim nullam tempor sapien gravida donec enim ipsum porta justo
          congue magna at pretium purus pretium ligula
        </p>
        <div className="items">
          <AnalyticsItem
            heading="Automatic event tracking"
            text="Time Tracking is never been easier.
Just let the stopwatch run"
            icon={icon1}
            iconBgClr={st.colors.sp_4}
          />
          <AnalyticsItem
            heading="Customizable dashboard"
            text="Time Tracking is never been easier.
Just let the stopwatch run"
            icon={icon2}
            iconBgClr={st.colors.sp_5}
          />
          <AnalyticsItem
            heading="Statistics retroactively"
            text="Time Tracking is never been easier.
Just let the stopwatch run"
            icon={icon3}
            iconBgClr={st.colors.sp_6}
          />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 60px;
  overflow: hidden;

  .mobile {
    min-width: 386px;
    width: 386px;
    height: 363px;
    margin-bottom: 49px;
    transform: translateX(-6px);
  }

  .heading-container {
    margin-bottom: ${st.indentations.ind_800};
    position: relative;

    .vector-1 {
      width: 116px;
      height: 23px;
      position: absolute;
      top: 12px;
      left: 0;
      opacity: 0.5;
      z-index: -1;
    }
  }

  p {
    margin-bottom: ${st.indentations.ind_1300};
  }

  .items {
    display: flex;
    flex-direction: column;
    gap: ${st.indentations.ind_1200};
  }

  @media screen and (min-width: ${st.breakpoints.sm}) {
    .items {
      gap: ${st.indentations.ind_1400};
    }
  }

  @media screen and (min-width: ${st.breakpoints.md}) {
    margin-top: 120px;

    .mobile {
      width: 760px;
      height: 714px;
      transform: translateX(-12px);
    }

    .heading-container {
      .vector-1 {
        width: 176px;
        height: 35px;
        top: 39px;
        left: 255px;
        opacity: 1;
      }
    }
  }

  @media screen and (min-width: ${st.breakpoints.xl}) {
    margin-top: 180px;
    display: flex;
    gap: 34px;

    .mobile {
      transform: translateX(-12px);
    }

    & > .info {
      max-width: 568px;
      margin: 0;
      margin-top: 50px;
    }
  }

  @media screen and (min-width: ${st.breakpoints.xxl}) {
    .mobile {
      width: 941px;
      height: 886px;
    }

    & > .info {
      margin-top: 118px;
    }
  }
`;

export default Analytics;
