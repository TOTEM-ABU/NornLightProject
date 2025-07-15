import styled from "styled-components";

export const ProductDetailsWrapper = styled.div`
  max-width: 1316px;
  width: 100%;
  margin: 48px auto 0 auto;
  padding: 16px;
`;

export const Section1 = styled.div`
  display: flex;
  gap: 56px;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }

  p:first-child {
    color: #454545;
    font-size: 40px;
    font-weight: 500;
    line-height: 100%;
  }

  .last-p {
    color: #4c4c4c;
    font-size: 16px;
    font-weight: 400;
    line-height: 160%;
  }

  .basket {
    display: flex;
    gap: 16px;
    margin-top: 48px;

    .counter {
      display: flex;
      padding: 16px;
      gap: 32px;
      border: 1px solid #e5e5e5;
      border-radius: 10px;

      button {
        border: none;
        background-color: white;
        cursor: pointer;
        outline: none;
      }
    }

    .korzina {
      background-color: #454545;
      border: none;
      border-radius: 10px;
      gap: 10px;
      width: 180px;
      color: white;
      font-weight: 500;
      font-size: 16px;
      line-height: 123%;
      transition: all 0.2s ease-in;

      &:hover {
        background-color: #101010;
        cursor: pointer;
      }
    }

    .liked {
      fill: #ff0000;
    }

    .unliked {
      fill: #ffffff;
    }
  }

  .info {
    .statistics {
      display: flex;
      justify-content: space-between;
      margin: 40px 0;

      div:first-child {
        display: flex;
        flex-direction: column;
        gap: 12px;

        p:first-child,
        p:nth-child(2) {
          color: #b3b3b3;
          font-weight: 400;
          font-size: 14px;
          line-height: 160%;
        }

        p:nth-child(3) {
          color: #4d932c;
          font-weight: 400;
          font-size: 14px;
          line-height: 160%;
        }
      }

      .icons {
        display: flex;
        gap: 8px;

        img {
          width: 21px;
        }
      }
    }

    .price {
      display: flex;
      gap: 16px;
      margin-bottom: 40px;

      p:first-child {
        color: #101010;
        font-weight: 500;
        font-size: 40px;
        line-height: 160%;
      }

      p:nth-child(2) {
        margin-top: 25px;
        color: #b3b3b3;
        font-weight: 500;
        font-size: 18px;
        line-height: 160%;
        text-decoration: line-through;
      }
    }
  }
`;

export const Character = styled.p`
  margin-top: 181px;
  font-weight: 500;
  font-size: 40px;
  line-height: 110%;
`;

export const Section2 = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #f8f8f8;

  .card {
    display: flex;
    width: 100%;
    padding: 28px;
    justify-content: space-between;

    div:nth-child(odd) {
      width: 100%;
      font-weight: 500;
      font-size: 16px;
      line-height: 123%;
      color: #101010;
    }

    div:nth-child(even) {
      font-weight: 300;
      font-size: 18px;
      line-height: 160%;
      color: #4c4c4c;
      text-align: end;
    }

    &:nth-child(even) {
      background-color: #f8f8f8;
    }
  }
`;
export const HiddenSection = styled.div`
  max-width: 768px;
  width: 100%;
  gap: 16px;
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }

  img {
    max-width: calc(100% / 4);
    width: 100%;
  }
`;
