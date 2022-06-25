import React, { FC } from "react";
import styled, { css } from "styled-components";
import st from "../../../styles";

interface Props {
  children: React.ReactNode;
  onClick: any;
  view?: "primary" | "secondary";
  className?: string;
}

const Button: FC<Props> = ({
  children,
  onClick,
  className = "",
  view = "primary",
}) => {
  return (
    <Wrapper view={view} type="button" onClick={onClick} className={className}>
      {children}
    </Wrapper>
  );
};

interface Style {
  view: "primary" | "secondary";
}

/* &:hover {
    color: ${st.colors.nt_1};
  } */

const Wrapper = styled.button<Style>`
  padding: ${st.indentations.ind_1000} ${st.indentations.ind_1400};
  border-radius: ${st.borderRadiuses.br_4};
  font-size: ${st.fontSizes.fs_500};
  line-height: 28px;
  font-weight: 500;
  cursor: pointer;

  ${(props) =>
    props.view === "primary"
      ? css`
          background-color: ${st.colors.pr_1};
          color: #fff;
        `
      : css`
          background-color: #fff;
          border: 1px solid ${st.colors.pr_1};
          color: ${st.colors.pr_1};
        `};
`;

export default Button;
