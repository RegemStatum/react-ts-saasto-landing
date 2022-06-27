import React, { FC } from "react";
import styled from "styled-components";

import {
  Instagram,
  LinkedIn,
  Facebook,
  Twitter,
} from "../../assets/images/footer";
import st from "../../styles";

const FooterLinks: FC = () => {
  return (
    <Wrapper>
      <a href="https://www.linkedin.com/in/oleksandr-kondratov-11911a232/">
        <Instagram />
      </a>
      <a href="https://www.linkedin.com/in/oleksandr-kondratov-11911a232/">
        <LinkedIn />
      </a>
      <a href="https://www.linkedin.com/in/oleksandr-kondratov-11911a232/">
        <Facebook />
      </a>
      <a href="https://www.linkedin.com/in/oleksandr-kondratov-11911a232/">
        <Twitter />
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 46px 0 49px 0;
  display: flex;
  gap: 44px;

  a {
    width: 18px;
    height: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a:hover svg path {
    fill: ${st.colors.pr_1};
  }

  @media screen and (min-width: ${st.breakpoints.lg}) {
    margin: 0;
    align-items: center;
    order: 3;
  }
`;

export default FooterLinks;
