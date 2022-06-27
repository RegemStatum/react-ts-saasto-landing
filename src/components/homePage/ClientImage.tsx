import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import clientsReviews from "../../constants/clientsReviews";
import st from "../../styles";

interface Props {
  clientId: number;
}

const ClientImage: FC<Props> = ({ clientId }) => {
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    const newImage = clientsReviews.find(
      (review) => review.id === clientId
    )!.image;
    setCurrentImage(newImage);
  }, [clientId]);

  return (
    <Wrapper>
      <img src={currentImage} alt="user" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 170px;
  height: 144px;
  margin-bottom: 30px;
  background-color: #fff8f2;
  border-radius: ${st.borderRadiuses.br_4};

  img {
    width: 170px;
    height: 144px;
    border-radius: ${st.borderRadiuses.br_4};
    object-fit: cover;
  }

  @media screen and (min-width: ${st.breakpoints.md}) {
    width: 298px;
    height: 379px;
    margin-bottom: 50px;
    border-radius: 370px;

    img {
      width: 298px;
      height: 379px;
      border-radius: 370px;
    }
  }

  @media screen and (min-width: ${st.breakpoints.lg}) {
    margin-bottom: 0;
  }
`;

export default ClientImage;
