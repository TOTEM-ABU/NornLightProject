import styled from "styled-components";

export const CatalogueWrapper = styled.div`
  max-width: 100%;
  width: 100%;
  height: 615px;
  padding: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    height: auto;
    padding: 1rem;
    box-sizing: border-box;
  }
`;

export const TitleButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 1rem;
    margin-bottom: 20px;
  }

  p {
    font-family: "Manrope";
    font-weight: 700;
    font-size: 40px;
    color: rgba(69, 69, 69, 1);
    margin-bottom: 0;

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
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  border-radius: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
    gap: 15px;
    max-height: 500px;
    overflow-y: auto;
  }

  .card {
    width: 420px;
    height: 250px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border-radius: 16px;
    padding: 20px;
    background-color: rgba(242, 242, 242, 1);

    @media (max-width: 768px) {
      width: 100%;
      height: auto;
      flex-direction: row;
      justify-content: flex-start;
      gap: 15px;
      padding: 15px;
      box-sizing: border-box;
    }

    .texts {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 100px;

      @media (max-width: 768px) {
        gap: 10px;
        flex: 1;
      }

      p:first-child {
        font-size: 20px;
        font-weight: 500;
        color: rgba(69, 69, 69, 1);
        margin-bottom: 8px;

        @media (max-width: 768px) {
          font-size: 16px;
        }
      }

      p:last-child {
        font-size: 16px;
        color: #555;

        @media (max-width: 768px) {
          font-size: 14px;
        }
      }
    }

    &:hover {
      background-color: rgba(69, 69, 69, 1);
      transition: all 0.3s ease;

      .texts p {
        color: white;
      }
    }
  }

  img {
    width: 212px;
    height: 237px;
    object-fit: contain;

    @media (max-width: 768px) {
      width: 100px;
      height: 100px;
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
