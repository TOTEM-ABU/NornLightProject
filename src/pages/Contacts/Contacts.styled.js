import styled from "styled-components";

export const ContactsPageWrapper = styled.div`
  max-width: 1800px;
  width: 100%;
  margin: 100px auto 0 auto;
  padding: 16px;

  .contacts {
    max-width: 1316px;
    width: 100%;
    margin: 0 auto 60px auto;
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    .contact {
      font-weight: 700;
      font-size: 64px;
      line-height: 110%;
      color: #454545;

      @media (max-width: 768px) {
        margin: 50px 0;
      }
    }

    .adress {
      width: 214px;
      display: flex;
      flex-direction: column;
      gap: 10px;

      p {
        &:first-child {
          font-weight: 600;
          font-size: 24px;
          line-height: 100%;
          color: #454545;
        }

        &:nth-child(2) {
          font-weight: 400;
          font-size: 16px;
          line-height: 100%;
          color: #454545;
        }
      }
    }
  }

  .pochta {
    max-width: 1316px;
    width: 100%;
    position: absolute;
    bottom: 32px;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 58px 62px;
    background-color: #ffffff;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
      position: static;
      flex-direction: column;
      transform: none;
      gap: 32px;
    }

    p:first-child {
      font-weight: 600;
      font-size: 24px;
      line-height: 100%;
      color: #454545;
    }

    p:nth-child(2) {
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;
      letter-spacing: 0%;
      color: #454545;
    }

    button {
      padding: 16px;
      border: none;
      background-color: #454545;
      color: #ffffff;
      font-weight: 600;
      font-size: 16px;
      line-height: 100%;
      border-radius: 100px;
      outline: none;
      transition: all 0.2s ease-in;

      &:hover {
        background-color: #101010;
        cursor: pointer;
      }
    }
  }

  .map {
    position: relative;
    margin: 0 auto;
    max-width: 1800px;
  }
`;
