import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import pageLinks from "../../constants/pageLinks";
import { useAppContext } from "../../context/AppContext";
import st from "../../styles";

const Sidebar: FC = () => {
  const { isSidebarOpen, toggleSidebar } = useAppContext();

  return (
    <Wrapper isOpen={isSidebarOpen}>
      <aside>
        <nav>
          {pageLinks.map((link, index) => (
            <Link
              className="link-container"
              to={link.to}
              key={index}
              onClick={toggleSidebar}
            >
              {link.icon}
              <p className="text">{link.name}</p>
            </Link>
          ))}
        </nav>
      </aside>
    </Wrapper>
  );
};

interface Style {
  isOpen: boolean;
}

const Wrapper = styled.div<Style>`
  height: 100vh;
  position: absolute;
  background-color: #fff;
  z-index: 500;
  transition: width 0.2s ease-in;
  overflow: hidden;
  margin-bottom: -1px;

  aside {
    width: 90%;

    margin: ${st.indentations.ind_1700} auto;
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: ${st.indentations.ind_1000};

    .link-container {
      padding: ${st.indentations.ind_600};
      display: flex;
      align-items: center;
      gap: ${st.indentations.ind_800};
      font-size: ${st.fontSizes.fs_700};
      font-weight: 500;
      color: rgba(255, 85, 62, 0.85);

      p {
        color: ${st.colors.nt_3};
      }

      &:hover {
        border-bottom: 2px solid ${st.colors.nt_3};
        margin-bottom: -2px;
      }
    }
  }

  ${(props) =>
    props.isOpen
      ? css`
          width: 100%;
        `
      : css`
          width: 0;
        `}

  @media screen and (min-width: ${st.breakpoints.md}) {
    aside {
      margin: calc(${st.indentations.ind_1900} + 8px) auto;
    }

    .link-container {
      p,
      svg {
        font-size: ${st.fontSizes.fs_700};
      }
    }
  }

  @media screen and (min-width: ${st.breakpoints.lg}) {
    display: none;
  }
`;

export default Sidebar;
