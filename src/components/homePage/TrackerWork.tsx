import React, { FC } from "react";
import styled from "styled-components";
import st from "../../styles";
import TrackerItem from "./TrackerItem";
import { icon1, icon2, icon3, vector1 } from "../../assets/images/trackerWork";
import { vector2, vector3 } from "../../assets/images/trackerWork";
import TrackerImages from "./TrackerImages";
import TrackerBgElements from "./TrackerBgElements";

const TrackerWork: FC = () => {
  return (
    <Wrapper>
      <div className="container">
        {/* info  */}
        <div className="info-container">
          <div className="heading-container">
            <h2>How our Tracker work for you</h2>
            <img src={vector1} alt="vector-1" className="vector-1" />
          </div>
          <p className="description">
            An enim nullam tempor sapien gravida donec enim ipsum porta justo
            congue magna at pretium purus pretium ligula
          </p>
          <div className="info">
            <div className="tracker-item-1-container">
              <TrackerItem
                heading="Time Tracking"
                text="Time Tracking is never been easier.
Just let the stopwatch run"
                icon={icon1}
                iconBgClr={st.colors.sp_7}
              />
              <img src={vector2} alt="vector-2" className="arrow-1" />
            </div>
            <div className="tracker-item-2-container">
              <TrackerItem
                heading="Expenses"
                text="Time Tracking is never been easier.
Just let the stopwatch run"
                icon={icon2}
                iconBgClr={st.colors.sp_8}
              />
              <img src={vector3} alt="vector-3" className="arrow-2" />
            </div>
            <TrackerItem
              heading="Budget controlling"
              text="Time Tracking is never been easier.
Just let the stopwatch run"
              icon={icon3}
              iconBgClr={st.colors.sp_9}
            />
          </div>
        </div>
        {/* images */}
        <div className="images">
          <TrackerImages />
        </div>
        {/* background elements */}
        <TrackerBgElements />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 60px;
  padding: ${st.indentations.ind_1600} 0;
  z-index: 0;
  background-color: ${st.colors.bg_3};

  .container {
    position: relative;
  }

  .heading-container {
    position: relative;
    margin-bottom: ${st.indentations.ind_800};

    .vector-1 {
      width: 103px;
      height: 104px;
      position: absolute;
      top: -22px;
      left: 95px;
      opacity: 0.4;
      z-index: -1;
    }
  }

  .container > .info-container > .info {
    display: flex;
    flex-direction: column;
    gap: ${st.indentations.ind_1200};
  }

  .description {
    margin-bottom: ${st.indentations.ind_1300};
  }

  .arrow-1,
  .arrow-2 {
    display: none;
  }

  @media screen and (min-width: ${st.breakpoints.xs}) {
    overflow: hidden;
  }

  @media screen and (min-width: ${st.breakpoints.md}) {
    .heading-container {
      margin-bottom: 20px;

      .vector-1 {
        width: 176px;
        height: 35px;
        top: 37px;
        left: 210px;
        opacity: 0.4;
      }
    }

    .description {
      margin-bottom: ${st.indentations.ind_1800};
    }

    // move second item to the right
    .info-container .info > div:nth-child(2) {
      margin-left: 238px;
    }

    .container > .info-container > .info {
      gap: ${st.indentations.ind_1800};
    }

    .tracker-item-1-container,
    .tracker-item-2-container {
      position: relative;
    }

    .arrow-1,
    .arrow-2 {
      display: block;
      position: absolute;
    }

    .arrow-1 {
      top: 50px;
      left: 510px;
    }

    .arrow-2 {
      top: 30px;
      left: -170px;
    }
  }

  @media screen and (min-width: ${st.breakpoints.xl}) {
    padding: 140px 0 156px 0;

    .info-container {
      max-width: 708px;
    }

    .images {
      position: absolute;
      top: 0;
      left: 735px;
    }
  }
`;

export default TrackerWork;
