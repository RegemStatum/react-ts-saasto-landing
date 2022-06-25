import React, { FC } from "react";
import styled from "styled-components";
import links from "../../constants/pageLinks";
import { Link } from "react-router-dom";
import st from "../../styles";

const HeaderLinks: FC = () => {
  return (
    <Wrapper>
      {links.map((link, index) => (
        <Link className="link" to={link.to} key={index}>
          {link.name}
        </Link>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  gap: ${st.indentations.ind_1400};
  font-size: ${st.fontSizes.fs_500};

  a {
    color: ${st.colors.nt_1};

    &:hover {
      color: ${st.colors.pr_1};
    }
  }
`;

export default HeaderLinks;
