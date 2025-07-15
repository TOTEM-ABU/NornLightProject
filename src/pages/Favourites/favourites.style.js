import styled from "styled-components";

export const Container = styled.div`
  width: 1000px;
  margin: 50px auto 0 auto;
`;

export const MainBox = styled.div`
  .box {
    margin-top: 50px;
    display: flex;
    gap: 40px;
  }

  @media (max-width: 768px) {

    &{
      width: 800px;
       margin: 50px auto 0 auto;
    }
    .box {
      flex-direction: column;
      gap: 20px;
    }
  }
`;
