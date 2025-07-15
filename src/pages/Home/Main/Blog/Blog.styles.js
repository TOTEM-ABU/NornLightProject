import styled from "styled-components";

export const BlogWrapper = styled.div`
  margin: 0 auto 0;
  max-width: 1316px;
  width: 100%;
  height: 615px;

  @media (max-width: 600px) {
    margin-left: 0;
    margin-top: 20px;
    width: 100%;
    height: auto;
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

  p {
    padding-left: 20px;
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
  }
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  border-radius: 16px;

  .card {
    width: 420px;
    height: 456px;

    .texts {
      margin-top: 30px;
      p:first-child,
      p:nth-child(2) {
        font-size: 20px;
        font-weight: 700;
        color: rgba(69, 69, 69, 1);
        margin-bottom: 8px;
      }

      p:first-child {
        margin-bottom: 0;
      }

      p:nth-child(2) {
        margin-top: 0;
      }
    }

    .icons {
      position: absolute;

      img {
        position: relative;
        left: 390px;
        bottom: 50px;
      }

      p {
        font-weight: 500;
        font-size: 14px;
        color: rgba(69, 69, 69, 1);
        margin-bottom: 32px;
      }

      .line {
        width: 420px;
        color: rgba(248, 239, 239, 1);
      }
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 15px;
    padding: 0;
    border-radius: 0;
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
