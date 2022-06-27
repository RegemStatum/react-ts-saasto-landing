import React, { FC } from "react";
import styled from "styled-components";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import clientsReviews from "../../constants/clientsReviews";
import ClientSlide from "./ClientSlide";
import st from "../../styles";

interface Props {
  setClientId: React.Dispatch<React.SetStateAction<number>>;
}

const ClientsSlider: FC<Props> = ({ setClientId }) => {
  return (
    <Wrapper
      modules={[Pagination]}
      effect="fade"
      pagination={{ clickable: false }}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={(swiper) => setClientId(swiper.activeIndex)}
    >
      {clientsReviews.map((clientReview) => (
        <SwiperSlide key={clientReview.id}>
          <ClientSlide
            text={clientReview.description}
            name={clientReview.name}
            position={clientReview.position}
          />
        </SwiperSlide>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled(Swiper)`
  cursor: pointer;

  .swiper-pagination {
    display: flex;
    gap: 5px;

    .swiper-pagination-bullet {
      display: block;
      width: 10px;
      height: 10px;
      background-color: rgba(255, 85, 62, 0.2);
      border-radius: 50%;

      &.swiper-pagination-bullet-active {
        width: 36px;
        border-radius: 7px;
        background-color: ${st.colors.pr_1};
        transition: width 0.2s ease-in;
      }
    }
  }

  @media screen and (min-width: ${st.breakpoints.md}) {
    gap: 10px;

    .swiper-pagination-bullet {
      width: 12px;
      height: 12px;
    }
  }

  @media screen and (min-width: ${st.breakpoints.lg}) {
    position: relative;

    .swiper-pagination {
      display: flex;
      position: absolute;
      z-index: 2;
      bottom: 70px;
      margin-left: ${st.indentations.ind_1600};
    }
  }
`;

export default ClientsSlider;
