import React, { FC } from "react";
import styled from "styled-components";
import st from "../../styles";

interface Props {
  icon: string;
  heading: string;
  text: string;
  bgColor: string;
  iconBgColor: string;
  className?: string;
}

const FeaturesCard: FC<Props> = ({
  icon,
  heading,
  text,
  bgColor,
  iconBgColor,
  className = "",
}) => {
  return (
    <Wrapper bgColor={bgColor} iconBgColor={iconBgColor} className={className}>
      <div className="img-container">
        <img src={icon} alt="icon" width={33} height={33} />
      </div>
      <h3>{heading}</h3>
      <p>{text}</p>
    </Wrapper>
  );
};

interface Style {
  bgColor: string;
  iconBgColor: string;
}

const Wrapper = styled.div<Style>`
  padding: ${st.indentations.ind_900};
  border-radius: ${st.borderRadiuses.br_3};
  background-color: ${(props) => props.bgColor};
  box-shadow: 14px 20px 48px rgba(25, 15, 44, 0.06);

  .img-container {
    width: max-content;
    margin-bottom: ${st.indentations.ind_800};
    padding: ${st.indentations.ind_800} ${st.indentations.ind_700};
    position: relative;
    border-radius: ${st.borderRadiuses.br_1};
    z-index: 1;

    &::after,
    &::before {
      content: "";
      display: block;
      position: absolute;
      border-radius: ${st.borderRadiuses.br_1};
    }

    &::before {
      top: -1px;
      left: -2px;
      width: 67px;
      height: 66px;
      background: linear-gradient(
        rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 0)
      );
      z-index: -2;
    }

    &::after {
      top: 0;
      left: 0;
      width: 64px;
      height: 63px;
      background-color: ${(props) => props.iconBgColor};
      z-index: -1;
    }

    img {
      width: max-content;
      transform: translate(1px, -1px);
    }
  }

  h3,
  p {
    color: #fff;
  }

  h3 {
    margin-bottom: ${st.indentations.ind_500};
    font-size: ${st.fontSizes.fs_700};
    font-weight: 600;
    line-height: 100%;
  }

  p {
    line-height: 26px;
    opacity: 0.8;
  }

  @media screen and (min-width: ${st.breakpoints.md}) {
    padding: ${st.indentations.ind_1100};
  } ;
`;

export default FeaturesCard;
