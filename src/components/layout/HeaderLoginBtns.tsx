import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../ui/buttons/Button";
import st from "../../styles";

const HeaderLoginBtns: FC = () => {
  return (
    <Wrapper>
      <Link to="/" className="btn">
        Login
      </Link>
      <Link to="/" className="btn">
        <Button className="sign-up-btn" onClick={null}>
          Sign up
        </Button>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${st.indentations.ind_1200};
  font-size: ${st.fontSizes.fs_500};

  .btn:first-child {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    color: ${st.colors.pr_1};
  }

  .sign-up-btn {
    padding: ${st.indentations.ind_800} ${st.indentations.ind_1200};
  }
`;

export default HeaderLoginBtns;
