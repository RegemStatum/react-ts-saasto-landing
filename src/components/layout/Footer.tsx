import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import pageLinks from "../../constants/pageLinks";
import st from "../../styles";
import { Logo } from "../ui";
import FooterLinks from "./FooterLinks";

const Footer: FC = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="links-container">
          <Logo />
          <FooterLinks />
          <nav className="nav">
            {pageLinks.map((link, index) => (
              <Link className="link" to={link.to} key={index}>
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="underline"></div>
        <div className="info">
          <a href="https://www.linkedin.com/in/oleksandr-kondratov-11911a232/">
            <p>Terms &#38; condition</p>
          </a>
          <a href="https://www.linkedin.com/in/oleksandr-kondratov-11911a232/">
            <p>Privacy policy</p>
          </a>
          <p>
            All Right Reserved{" "}
            <a
              href="https://www.linkedin.com/in/oleksandr-kondratov-11911a232/"
              target="blank"
            >
              @al_kon
            </a>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  padding: ${st.indentations.ind_1900} 0 ${st.indentations.ind_1400} 0;

  .nav {
    margin-bottom: ${st.indentations.ind_1400};
    display: flex;
    flex-direction: column;
    gap: ${st.indentations.ind_1200};

    a {
      font-size: ${st.fontSizes.fs_500};
      color: ${st.colors.nt_1};

      &:hover {
        color: ${st.colors.pr_1};
      }
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 28px;

    p {
      line-height: 24px;
      opacity: 0.5;
    }
  }

  @media screen and (min-width: ${st.breakpoints.lg}) {
    .container {
      display: flex;
      flex-direction: column;
    }

    .links-container {
      margin-top: 129px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .underline {
      height: 1px;
      margin: 58px 0 40px 0;
      background-color: ${st.colors.nt_5};
      opacity: 0.2;
    }

    .nav {
      margin: 0;
      flex-direction: row;
      order: 2;
    }

    .info {
      flex-direction: row;
      margin-bottom: 60px;

      a:nth-child(2) {
        margin-left: 108px;
      }

      p:last-child {
        margin-left: auto;

        a {
          color: ${st.colors.pr_1};
        }
      }
    }
  }
`;

export default Footer;
