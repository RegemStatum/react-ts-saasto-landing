import React, { FC } from "react";
import styled from "styled-components";
import st from "../../styles";

interface Props {
  text: string;
  name: string;
  position: string;
}

const ClientSlide: FC<Props> = ({ text, name, position }) => {
  return (
    <Wrapper>
      <p className="text">{text}</p>
      <p className="name">{name}</p>
      <p className="position">{position}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .text {
    margin-bottom: ${st.indentations.ind_1100};
  }

  .name {
    margin-bottom: ${st.indentations.ind_500};
    font-size: ${st.fontSizes.fs_600};
    font-weight: 500;
    line-height: 24px;
    opacity: 1;
  }

  .position {
    margin-bottom: ${st.indentations.ind_700};
    font-weight: 500;
    line-height: 26px;
    opacity: 0.7;
  }

  @media screen and (min-width: ${st.breakpoints.md}) {
    .text {
      margin-bottom: ${st.indentations.ind_1100};
      font-size: 20px;
    }

    .position {
      margin-bottom: ${st.indentations.ind_1100};
    }
  }

  @media screen and (min-width: ${st.breakpoints.lg}) {
    max-width: 652px;
    margin-top: 65px;
    margin-left: ${st.indentations.ind_1600};

    .text {
      margin-bottom: 36px;
    }

    .name {
      margin-bottom: ${st.indentations.ind_800};
    }

    .position {
      margin-bottom: 28px;
    }
  }
`;

export default ClientSlide;
