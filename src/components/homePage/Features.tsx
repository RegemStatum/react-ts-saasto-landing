import React, { FC } from "react";
import styled from "styled-components";
import FeaturesCard from "./FeaturesCard";
import {
  feature1,
  feature2,
  feature3,
  vector1,
  vector2,
} from "../../assets/images/features";
import st from "../../styles";

const Features: FC = () => {
  return (
    <Wrapper className="container">
      <h2>Some excellent features for you</h2>
      <p>
        An enim nullam tempor sapien gravida donec enim ipsum porta justo congue
        magna at pretium purus pretium ligula
      </p>
      <div className="features-card-container">
        <FeaturesCard
          icon={feature1}
          heading="Preset List of Task"
          text="Make bill payments easily using the wallet app"
          bgColor={st.colors.sp_1}
          iconBgColor={"#b7e7ed"}
        />
        <FeaturesCard
          icon={feature2}
          heading="Reminder of Task"
          text="Make bill payments easily using the wallet app"
          bgColor={st.colors.sp_2}
          iconBgColor={"#b9afee"}
        />
        <FeaturesCard
          icon={feature3}
          heading="Complication Report"
          text="Make bill payments easily using the wallet app"
          bgColor={st.colors.sp_3}
          iconBgColor={"#fcc2af"}
        />
      </div>
      <img src={vector1} alt="vector-1" className="vector-1" />
      <img src={vector2} alt="vector-2" className="vector-2" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 42px;
  position: relative;

  h2 {
    margin-top: ${st.indentations.ind_300};
    margin-bottom: ${st.indentations.ind_700};
    text-align: center;
    text-transform: capitalize;
  }

  p:nth-child(2) {
    margin-bottom: ${st.indentations.ind_1100};
    line-height: 36px;
    text-align: center;
    opacity: 0.8;
  }

  .features-card-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: ${st.indentations.ind_900};
  }

  .vector-1 {
    position: absolute;
    top: 65px;
    right: 15px;
    z-index: -1;
  }

  .vector-2 {
    display: none;
    position: absolute;
    z-index: -1;
  }

  @media screen and (min-width: ${st.breakpoints.md}) {
    padding-top: ${st.indentations.ind_2000};
    position: relative;
    z-index: 1;

    h2 {
      margin-bottom: ${st.indentations.ind_900};
    }

    p:nth-child(2) {
      max-width: 660px;
      margin: 0 auto ${st.indentations.ind_1800} auto;
    }

    .features-card-container {
      grid-template-columns: 1fr 1fr;
    }

    .vector-1 {
      width: 176px;
      height: 35px;
      right: 120px;
      top: 140px;
    }
  }

  @media screen and (min-width: ${st.breakpoints.xl}) {
    padding-top: 195px;

    .features-card-container {
      grid-template-columns: 1fr 1fr 1fr;
      gap: ${st.indentations.ind_1200};
    }

    .vector-1 {
      top: 235px;
      right: 415px;
    }

    .vector-2 {
      display: block;
      left: -267px;
      top: 50px;
    }
  }
`;

export default Features;
