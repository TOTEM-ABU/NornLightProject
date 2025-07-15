import styled from "styled-components";

export const CooperationWrapper = styled.div`
  margin: 50px auto; 
  max-width: 1316px;
  width: 100%;
  display: flex;
  gap: 390px;

  @media (max-width: 600px) {
    margin-left: 0;
    margin-top: 70px;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 1rem;
    box-sizing: border-box;
  }
`;

export const TitleSide = styled.div`
  flex-shrink: 0;
  width: 350px;
  padding-left: 20px;

  p {
    font-family: "Manrope", sans-serif;
    font-weight: 700;
    font-size: 40px;
    color: rgba(69, 69, 69, 1);
    line-height: 1.1;
    margin: 0;
  }

  @media (max-width: 600px) {
    width: 100%;
    padding-left: 0;
    text-align: center;
  }
`;

export const ContentSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-right: 20px;

  .content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 610px;
    height: 390px;
  }

  p {
    font-family: "Manrope", sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: rgba(69, 69, 69, 1);
    line-height: 1.6;
    margin: 0;
  }

  @media (max-width: 600px) {
    flex: none;
    width: 100%;
    padding-right: 0;
    padding-top: 20px;
    .content {
      width: 100%;
      height: auto;
    }
  }
`;
