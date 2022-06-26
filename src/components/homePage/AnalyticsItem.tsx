import React, { FC } from "react";
import styled from "styled-components";
import st from "../../styles";

interface Props {
  heading: string;
  text: string;
  icon: string;
  iconBgClr: string;
}

const AnalyticsItem: FC<Props> = ({ heading, text, iconBgClr, icon }) => {
  return (
    <Wrapper iconBgColor={iconBgClr}>
      <div className="icon-container">
        <img src={icon} alt="icon" className="icon" />
      </div>
      <div className="info">
        <h3>{heading}</h3>
        <p>{text}</p>
      </div>
    </Wrapper>
  );
};

interface Style {
  iconBgColor: string;
}

const Wrapper = styled.div<Style>`
  display: flex;
  gap: 18px;

  .icon-container {
    flex-shrink: 0;
    height: max-content;
    border-radius: 10px;
    background-color: ${(props) => props.iconBgColor};

    .icon {
      width: 31px;
      height: 31px;
      margin: 13px;
    }
  }

  .info {
    h3 {
      margin-bottom: ${st.indentations.ind_500};
      font-size: ${st.fontSizes.fs_500};
      font-weight: 600;
      line-height: 120%;
      color: ${st.colors.nt_5};
    }

    p {
      margin-bottom: 0;
      opacity: 0.8;
    }
  }

  @media screen and (min-width: ${st.breakpoints.md}) {
    .icon-container {
      border-radius: ${st.borderRadiuses.br_2};

      .icon {
        width: 48px;
        height: 48px;
        margin: 20px;
      }
    }

    .info h3 {
      font-size: ${st.fontSizes.fs_700};
    }
  }
`;

export default AnalyticsItem;
