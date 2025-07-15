import styled from "styled-components";

export const BlogPageWrapper = styled.div`
  max-width: 1316px;
  width: 100%;
  margin: 100px auto 0;

  @media (max-width: 768px) {
    margin-top: 20px;
    padding: 0 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

export const TitleWrapper = styled.div`
  p {
    font-family: "Manrope", sans-serif;
    font-weight: 700;
    font-size: 40px;
    color: rgba(69, 69, 69, 1);
  }
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  border-radius: 16px;

  .card {
    width: 420px;
    height: 456px;
    margin-top: 30px;

    .texts {
      margin-top: 30px;

      p:first-child,
      p:nth-child(2) {
        font-size: 20px;
        font-weight: 700;
        color: rgba(69, 69, 69, 1);
      }

      p:first-child {
        margin-bottom: 0;
      }

      p:nth-child(2) {
        margin-top: 0;
        margin-bottom: 8px;
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

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
    padding: 0;
    border-radius: 0;
  }
`;
