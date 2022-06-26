import React, { FC, useState } from "react";
import styled from "styled-components";
import st from "../../styles";
import Switcher from "../ui/Switcher";
import UsageOptionsCard from "./UsageOptionsCard";
import { vector1 } from "../../assets/images/usageOptions";
import UsageOptionsBgElements from "./UsageOptionsBgElements";

const UsageOptions: FC = () => {
  const [usageOption, setUsageOption] = useState<"month" | "year">("month");

  const freeFeatures = ["1 seat", "2 project"];
  const nonFreeFeatures = ["Unlimited Seat", "Unlimited Project"];

  const handleToggle = () => {
    const otherOption = usageOption === "month" ? "year" : "month";
    setUsageOption(otherOption);
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="heading-container">
          <h2>Flexible work, Simple Price</h2>
          <img src={vector1} alt="vector-1" className="vector-1" />
        </div>
        <p className="description">Growth your business with using us</p>
        <div className="switcher-container">
          <p>Monthly</p>
          <Switcher toggleOption={handleToggle} />
          <p>Yearly</p>
        </div>
        <div className="cards">
          <UsageOptionsCard
            title="free"
            price="0"
            duration="Forever"
            features={freeFeatures}
            handleClick={null}
          />
          <UsageOptionsCard
            title="Premium"
            price={usageOption === "month" ? "2.99" : "33"}
            duration={usageOption}
            features={nonFreeFeatures}
            handleClick={null}
            type="secondary"
          />
        </div>
        <UsageOptionsBgElements />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: ${st.indentations.ind_1900};

  .container {
    position: relative;
  }

  .heading-container,
  .description {
    text-align: center;
  }

  .heading-container {
    margin-bottom: ${st.indentations.ind_500};
    position: relative;

    .vector-1 {
      width: 116px;
      height: 23px;
      position: absolute;
      top: 12px;
      left: 50%;
      transform: translateX(35px);
      opacity: 0.5;
      z-index: -1;
    }
  }

  .description {
    margin-bottom: ${st.indentations.ind_800};
  }

  .switcher-container {
    width: max-content;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: ${st.indentations.ind_900};

    p {
      font-family: "Poppins", sans-serif;
      font-size: ${st.fontSizes.fs_500};
      font-weight: 500;
      line-height: 28px;
      user-select: none;
    }
  }

  .cards {
    margin: ${st.indentations.ind_1400} 0;
    display: flex;
    flex-direction: column;
    gap: ${st.indentations.ind_1000};
  }

  @media screen and (min-width: ${st.breakpoints.md}) {
    .heading-container {
      margin-bottom: 20px;

      .vector-1 {
        width: 176px;
        height: 35px;
        top: 39px;
        transform: translateX(145px);
        opacity: 1;
      }
    }

    .description {
      margin-bottom: ${st.indentations.ind_1600};
    }

    .switcher-container {
      margin-bottom: ${st.indentations.ind_1800};
    }
  }

  .cards {
    gap: 30px;
  }

  @media screen and (min-width: ${st.breakpoints.xl}) {
    .cards {
      flex-direction: row;

      & > div {
        flex: 1;
      }
    }
  }
`;

export default UsageOptions;
