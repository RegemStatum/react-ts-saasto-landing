import React, { FC } from "react";
import styled, { css } from "styled-components";
import st from "../../styles";
import Button from "../ui/buttons/Button";

interface Props {
  title: string;
  price: string;
  duration: string;
  features: string[];
  handleClick: any;
  type?: "primary" | "secondary";
}

const UsageOptionsCard: FC<Props> = ({
  title,
  price,
  duration,
  features,
  handleClick,
  type = "primary",
}) => {
  return (
    <Wrapper view={type}>
      <div className="heading">
        <p className="title">{title}</p>
        <div className="price">
          <span>$</span> <p>{price}</p> <span>/{duration}</span>
        </div>
      </div>
      <div className="features">
        {features.map((feature, index) => (
          <p key={index}>{feature}</p>
        ))}
      </div>
      <Button view={type} onClick={handleClick} className="btn">
        Start 14 Days Trial
      </Button>
    </Wrapper>
  );
};

interface Styles {
  view: "primary" | "secondary";
}

const Wrapper = styled.div<Styles>`
  padding: ${st.indentations.ind_1300} ${st.indentations.ind_1100};
  border-radius: ${st.borderRadiuses.br_3};
  border: 1px solid ${st.colors.pr_1};

  .heading {
    display: flex;
    justify-content: space-between;

    .title {
      font-weight: 600;
      line-height: 100%;
      font-size: ${st.fontSizes.fs_600};
      text-transform: capitalize;
    }

    .price {
      display: flex;
      align-items: flex-end;

      span {
        display: block;
        font-size: ${st.fontSizes.fs_500};
        font-weight: 500;
        line-height: 28px;
      }

      span:first-child {
        margin-right: ${st.indentations.ind_200};
        opacity: 0.7;
      }

      p {
        margin-right: ${st.indentations.ind_400};
        font-size: 28px;
        font-weight: 700;
        line-height: 100%;
      }

      span:last-child {
        opacity: 0.4;
        text-transform: capitalize;
      }
    }
  }

  .features {
    margin-top: ${st.indentations.ind_1000};
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    gap: ${st.indentations.ind_800};

    p {
      font-size: ${st.fontSizes.fs_500};
      line-height: 20px;
      color: ${st.colors.pr_1};
    }
  }

  .btn {
    display: block;
    margin: 0 auto;
  }

  ${(props) =>
    props.view === "secondary" &&
    css`
      background-color: ${st.colors.pr_1};

      .heading span,
      .heading p,
      .features p {
        color: #fff;
      }
    `}

  @media screen and (min-width: ${st.breakpoints.md}) {
    padding: ${st.indentations.ind_1800} 0 ${st.indentations.ind_1600} 0;
    border-radius: 110px;
    text-align: center;

    .heading {
      position: relative;
      margin-bottom: ${st.indentations.ind_1700};
      justify-content: center;

      .title {
        font-size: ${st.fontSizes.fs_1000};
      }

      .price {
        position: absolute;
        bottom: -305px;

        span:first-child {
          align-self: flex-start;
        }

        p {
          font-size: 64px;
        }
      }
    }

    .features {
      gap: 20px;
      margin-bottom: 192px;

      p {
        font-size: 28px;
        line-height: 52px;
      }
    }
  }
`;

export default UsageOptionsCard;
