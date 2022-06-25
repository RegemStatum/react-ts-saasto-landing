import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/logo.svg";
import st from "../../styles";

interface Props {
  width?: number;
  height?: number;
  className?: string;
}

const Logo: FC<Props> = ({ width = 135, height = 30, className = "" }) => {
  return (
    <Link to="/">
      <Wrapper
        src={logo}
        alt="logo"
        width={width}
        height={height}
        className={className}
      />
    </Link>
  );
};

const Wrapper = styled.img`
  @media screen and (min-width: ${st.breakpoints.lg}) {
    width: 179px;
    height: 40px;
  }
`;

export default Logo;
