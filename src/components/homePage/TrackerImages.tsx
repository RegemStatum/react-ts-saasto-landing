import React, { FC } from "react";
import styled from "styled-components";
import { statistics, sales, earning } from "../../assets/images/trackerWork";
import st from "../../styles";

const TrackerImages: FC = () => {
  return (
    <Wrapper>
      <img src={statistics} alt="statistics" className="image statistics" />
      <img src={earning} alt="earning" className="image earning" />
      <img src={sales} alt="sales" className="image sales" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: max-content;
  padding-top: ${st.indentations.ind_1600};
  display: flex;
  flex-direction: column;
  gap: 45px;
  margin: 0 auto;

  .image {
    border-radius: ${st.borderRadiuses.br_2};
    box-shadow: 0px 32px 54px rgba(65, 74, 85, 0.05);
  }

  .statistics {
    width: 268px;
    height: 306px;
  }

  .earning {
    width: 268px;
    height: 271px;
  }

  .sales {
    display: none;
  }

  @media screen and (min-width: ${st.breakpoints.xs}) {
    flex-direction: row;
  }

  @media screen and (min-width: ${st.breakpoints.md}) {
    position: relative;
    width: 683px;
    height: 619px;
    margin: 0;
    margin-top: ${st.indentations.ind_2000};
    margin-bottom: ${st.indentations.ind_1800};
    padding: 0;

    .image {
      position: absolute;
    }

    .earning {
      width: 268px;
      height: 271px;
      top: 0;
      left: 0;
    }

    .statistics {
      width: 388px;
      height: 445px;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }

    .sales {
      display: block;
      width: 231px;
      height: 321px;
      left: 37px;
      bottom: 0;
    }
  }
`;

export default TrackerImages;
