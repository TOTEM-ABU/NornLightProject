import styled from "styled-components";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

export const PopularProductsWrapper = styled.div`
  width: 100%;
  height: auto;

  @media (max-width: 600px) {
    margin-left: 0;
    margin-top: 50px;
    width: 100%;
    padding: 0 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

export const TitleButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;

  p {
    padding-left: 40px;
    font-family: "Manrope";
    font-weight: 700;
    font-size: 40px;
    color: rgba(69, 69, 69, 1);
  }

  button {
    width: 220px;
    height: 50px;
    border-radius: 50px;
    font-weight: 500;
    font-size: 16px;
    border: 1px solid black;

    &:hover {
      background-color: rgba(69, 69, 69, 1);
      color: white;
    }

    @media (max-width: 600px) {
      display: none;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
    margin-bottom: 100px;

    p {
      font-size: 28px;
      padding-left: 0;
    }

    button {
      width: 100%;
      max-width: 300px;
      border: 1px solid rgba(69, 69, 69, 0.3);
      background-color: transparent;
      color: rgba(69, 69, 69, 1);

      &:hover {
        background-color: rgba(69, 69, 69, 1);
        color: white;
      }
    }
  }
`;

export const HeartIcon = styled(FaHeart)`
    position: absolute;
    top: 14px;
    right: 48px;
    overflow: hidden;
    font-size: 20px;
    color: red;
`;

export const HeartIconTwo = styled(FaRegHeart)`
     position: absolute;
    top: 14px;
    right: 48px;
    overflow: hidden;
    font-size: 20px;
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
  border-radius: 16px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    padding: 0;
    border-radius: 0;
  }

  .card {
    position: relative;
    width: 310px;
    text-decoration: none;
    height: 395px;
    padding-right: 37px;

    .box-btn{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .productImage {
      width: 173px;
      height: 216px;
    }


    .basketIcon {
      position: absolute;
      bottom: 38px;
      right: 13px;
      color: rgba(69, 69, 69, 1);
      background-color: rgba(69, 69, 69, 1);
      padding: 8px 20px;
      border-radius: 50px;
    }

    .text-content {
      text-align: start;

      .title1,
      .title2 {
        font-weight: 500;
        font-size: 20px;
        line-height: 1.3;
        color: rgba(69, 69, 69, 1);
      }

      .title2 {
        margin-top: 0;
      }

      .title1 {
        margin-bottom: 0;
      }

      .oldPrice {
        font-weight: 500;
        font-size: 12px;
        text-decoration: line-through;
        color: rgba(159, 159, 159, 1);
        margin-bottom: 0;
      }

      .newPrice {
        margin: 0;
        font-weight: 700;
        font-size: 20px;
        color: rgba(69, 69, 69, 1);
      }
    }
  }

  @media (max-width: 600px) {
    .card {
      width: 100%;
      height: auto;
      padding: 10px;

      .productImage {
        width: 100%;
        height: auto;
      }

      .heartIcon {
        top: 10px;
        right: 10px;
      }

      .basketIcon {
        bottom: 20px;
        right: 10px;
      }
    }
  }
`;

export const ViewAllButtonWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    padding: 20px 1rem;
    margin-top: 20px;
  }

  button {
    width: 100%;
    max-width: 300px;
    height: 50px;
    border-radius: 50px;
    font-weight: 500;
    font-size: 16px;
    border: 1px solid rgba(69, 69, 69, 1);
    background-color: transparent;
    color: rgba(69, 69, 69, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;

    &:hover {
      background-color: rgba(69, 69, 69, 1);
      color: white;
      svg {
        path {
          stroke: white;
        }
      }
    }
  }
`;
