import styled from "styled-components";

export const Swiper2Wrapper = styled.div`
  max-width: 1316px;
  width: 100%;
  height: 360px;
  margin: 0 auto 0;

  .mySwiper {
    padding-top: 40px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding-top: 20px;
    margin: 0;
    padding-bottom: 20px;

    .mySwiper {
      padding-top: 20px;
      padding-left: 20px;
      padding-right: 20px;
    }
  }
`;

export const TitleNavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;

  p {
    font-family: "Manrope", sans-serif;
    font-weight: 700;
    font-size: 40px;
    color: rgba(69, 69, 69, 1);
    line-height: 1.2;
  }

  .swiper-navigation-buttons {
    display: flex;
    gap: 10px;

    button {
      width: 39px;
      height: 26px;
      border-radius: 20px;
      border: 1px solid rgba(69, 69, 69, 1);
      background-color: transparent;
      color: rgba(69, 69, 69, 1);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.3s ease, color 0.3s ease,
        border-color 0.3s ease;

      &:hover {
        background-color: rgba(69, 69, 69, 1);
        color: white;
        border-color: rgba(69, 69, 69, 1);
      }

      &.swiper-button-disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 20px;
    padding-right: 20px;
    gap: 10px;

    p {
      font-size: 28px;
      text-align: left;
    }

    .swiper-navigation-buttons {
      display: none;
    }
  }
`;

export const BrandCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 310px;
  height: 112px;
  background-color: white;
  border: 1px solid rgba(217, 217, 217, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  cursor: pointer;

  img {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
    filter: grayscale(100%);
    transition: filter 0.3s ease;
  }

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    img {
      filter: grayscale(0%);
    }
  }

  @media (max-width: 768px) {
    width: calc(100% - 0px);
    height: 90px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  }
`;

export const SwiperPaginationStyles = styled.div`
  .swiper-pagination {
    position: relative;
    bottom: auto;
    margin-top: 20px;
    text-align: center;
  }

  .swiper-pagination-bullet {
    background: rgba(150, 150, 150, 0.7);
    opacity: 1;
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 50%;
    margin: 0 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    background: rgba(69, 69, 69, 1);
  }
`;
