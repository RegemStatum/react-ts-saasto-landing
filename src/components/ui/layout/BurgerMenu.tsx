import React, { FC } from "react";
import styled from "styled-components";
import { useAppContext } from "../../../context/AppContext";
import st from "../../../styles/index";

interface Props {
  className?: string;
}

const BurgerMenu: FC<Props> = ({ className = "" }) => {
  const { handleBurgerMenuClick, isSidebarOpen } = useAppContext();

  const handleClick = () => {
    handleBurgerMenuClick();
  };

  return (
    <Wrapper
      onClick={handleClick}
      className={`${className} ${isSidebarOpen ? "open" : ""}`}
    >
      <div className="line line-1"></div>
      <div className="line line-2"></div>
      <div className="line line-3"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 30px;
  height: 24px;
  position: relative;

  cursor: pointer;

  .line {
    width: 30px;
    height: 4px;
    position: absolute;
    left: 0;
    border-radius: 4px;
    background-color: ${st.colors.pr_1};
    transition: all 0.2s ease-in;
  }

  .line-1 {
    top: 0;
  }

  .line-2 {
    top: 50%;
    transform: translateY(-50%);
    opacity: 1;
  }

  .line-3 {
    bottom: 0;
  }

  &.open {
    .line-1 {
      top: 50%;
      transform: translateY(-50%) rotateZ(45deg);
    }

    .line-2 {
      opacity: 0;
    }

    .line-3 {
      bottom: 50%;
      transform: translateY(50%) rotateZ(-45deg);
    }
  }
`;

export default BurgerMenu;
