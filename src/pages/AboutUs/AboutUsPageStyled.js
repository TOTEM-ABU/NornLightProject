import styled from "styled-components";

export const AboutUsWrapper = styled.div`
  max-width: 1316px;
  width: 100%;
  margin: 15px auto 0 auto;

  .company {
    display: flex;
    gap: 16px;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    div {
      width: 50%;

      &:first-child {
        p:nth-child(1) {
          font-weight: 700;
          font-size: 64px;
          line-height: 110%;
          color: #454545;
          margin-bottom: 36px;
        }

        .cards {
          display: flex;
          flex-direction: column;
          gap: 20px;

          .card {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 16px;
            width: 530px;
            height: 253px;
            background-color: #f2f2f2;
            border-radius: 15px;

            p:nth-child(2) {
              font-weight: 500;
              font-size: 24px;
              line-height: 150%;
              color: #454545;
            }
          }
        }
      }

      &:nth-child(2) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        p {
          font-weight: 500;
          font-size: 20px;
          line-height: 150%;
          letter-spacing: 0%;
          color: #454545;
        }
      }
    }
  }
`;
