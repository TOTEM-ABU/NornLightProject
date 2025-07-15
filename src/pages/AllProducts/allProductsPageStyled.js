import styled from "styled-components";

export const AllProductsPageWrapper = styled.div`
  max-width: 1316px;
  width: 100%;
  margin: 48px auto 0 auto;
  padding: 16px;

  .cardWrapper {
    margin-top: 55px;

    .p-2 {
      color: #454545;
      font-weight: 700;
      font-size: 40px;
      line-height: 100%;
      margin-bottom: 89px;
    }

    .cards {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 26px;

      @media (max-width: 1100px) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
`;
