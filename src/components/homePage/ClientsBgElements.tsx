import React, { FC } from "react";
import styled from "styled-components";
import {
  vector2,
  vector3,
  like,
  chat,
  emoji,
} from "../../assets/images/clientsReviews";
import st from "../../styles";

const ClientsBgElements: FC = () => {
  return (
    <Wrapper>
      <img src={vector2} alt="element" className="element vector-2" />
      <img src={vector3} alt="element" className="element vector-3" />
      <img src={like} alt="element" className="element like" />
      <img src={chat} alt="element" className="element chat" />
      <img src={emoji} alt="element" className="element emoji" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .element {
    position: absolute;
    z-index: -1;
  }

  .vector-3,
  .emoji {
    display: none;
  }

  .vector-2 {
    width: 63px;
    height: 56px;
    top: 120px;
    left: 215px;
  }

  .like {
    width: 62px;
    height: 63px;
  }

  .chat {
    width: 79px;
    height: 81px;
  }

  .like {
    top: 50px;
    left: 165px;
  }

  .chat {
    top: 135px;
    left: 290px;
  }

  @media screen and (min-width: ${st.breakpoints.md}) {
    .vector-2 {
      width: 146px;
      height: 131px;
      top: 325px;
      left: 540px;
    }

    .chat {
      width: 196px;
      height: 200px;
      top: 400px;
      left: 700px;
    }

    .like {
      width: 220px;
      height: 225px;
      top: 100px;
      left: 350px;
    }
  }

  @media screen and (min-width: ${st.breakpoints.lg}) {
    .chat {
      top: 450px;
      left: -153px;
    }

    .like {
      top: -140px;
      left: -350px;
    }

    .vector-2 {
      top: 30px;
      left: -200px;
    }

    .emoji,
    .vector-3 {
      display: block;
    }

    .emoji {
      bottom: -40px;
      right: -230px;
    }

    .vector-3 {
      bottom: -93px;
      right: -270px;
    }
  }
`;

export default ClientsBgElements;
