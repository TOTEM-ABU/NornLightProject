import styled from "styled-components";

export const AboutCompanyWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 20px 1rem;
  box-sizing: border-box;
  margin-top: 50px;

  @media (max-width: 769px) {
    width: 100%;
    padding-top: 100px;
  }
`;

export const TitleButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
  }

  p {
    padding-left: 20px;
    font-family: "Manrope";
    font-weight: 700;
    font-size: 40px;
    color: rgba(69, 69, 69, 1);

    @media (max-width: 768px) {
      font-size: 28px;
      padding-left: 0;
      margin-bottom: 15px;
    }
  }

  button {
    width: 220px;
    height: 50px;
    border-radius: 50px;
    font-weight: 500;
    font-size: 16px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    &:hover {
      background-color: rgba(69, 69, 69, 1);
      color: white;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Ikkitadan qator */
  gap: 20px;
  padding: 0;

  @media (min-width: 769px) {
    grid-template-columns: repeat(4, 1fr);
    padding: 20px;
    border-radius: 16px;
  }

  .card {
    padding: 20px;
    width: 100%;
    height: auto;
    border: 1px solid rgba(217, 217, 217, 1);
    background-color: white;
    border-radius: 16px;
    box-sizing: border-box;

    img {
      width: 60px;
      height: 60px;
      background-color: rgba(69, 69, 69, 1);
      padding: 8px;
      border-radius: 8px;
      margin-bottom: 20px;
    }

    .texts {
      text-align: start;
      font-family: "Manrope";
      width: 100%;

      .title1,
      .title2 {
        font-weight: 700;
        font-size: 18px;
        color: rgba(69, 69, 69, 1);
        margin-bottom: 0;
        margin-top: 0;
      }

      .desc1,
      .desc2 {
        font-weight: 400;
        font-size: 14px;
        color: rgba(69, 69, 69, 0.7);
        margin-bottom: 0;
        margin-top: 0;
        line-height: 1.5;
      }
    }
  }
`;

export const MobileButtonWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    padding: 30px 1rem;
  }

  button {
    width: 100%;
    max-width: 100%;
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
