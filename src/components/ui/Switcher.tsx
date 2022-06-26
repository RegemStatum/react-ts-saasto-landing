import React, { FC, useState } from "react";
import styled from "styled-components";
import st from "../../styles";

interface Props {
  toggleOption: any;
}

const Switcher: FC<Props> = ({ toggleOption }) => {
  const [option, setOption] = useState(false);

  const handleClick = () => {
    setOption(!option);
    toggleOption();
  };

  return (
    <Wrapper
      onClick={handleClick}
      className={`${option ? "second-option" : ""}`}
    >
      <div className="circle"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 55px;
  height: 26px;
  position: relative;
  border-radius: ${st.borderRadiuses.br_2};
  background-color: rgba(255, 85, 62, 0.2);
  cursor: pointer;

  .circle {
    width: 18px;
    height: 18px;
    position: absolute;
    border-radius: 50%;
    background-color: #fff;
    top: 50%;
    left: 4px;
    transform: translateY(-50%);
    transition: all 0.1s ease-in-out;
  }

  &.second-option .circle {
    left: 33px;
    background-color: ${st.colors.pr_1};
  }

  @media screen and (min-width: ${st.breakpoints.md}) {
    width: 84px;
    height: 40px;

    .circle {
      width: 28px;
      height: 28px;
      left: 6px;
    }

    &.second-option .circle {
      left: 50px;
      background-color: ${st.colors.pr_1};
    }
  }
`;

export default Switcher;
