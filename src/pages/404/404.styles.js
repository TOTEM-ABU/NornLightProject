import styled from "styled-components";

export const NotFoundWrapper = styled.div`
  text-align: center;
  width: 1000px;
  margin: 0 auto;

  p:first-child {
    font-weight: 700;
    font-size: 420px;
    color: lightgray;
  }

  p:nth-child(2) {
    font-weight: bold;
    font-size: 24px;
    color: rgba(69, 69, 69, 1);
    margin-bottom: 60px;
  }

  button {
    width: 220px;
    height: 50px;
    border-radius: 50px;
    font-weight: 500;
    font-size: 16px;
    background-color: rgba(69, 69, 69, 1);
    color: white;
    cursor: pointer;

    &:hover{
      background-color: #ffffff;
      border: 1px solid #454545;
      color: #454545;
    }
  }

  @media (max-width: 1200px) {
    width: 100%;
    margin: 0 50px;
    height: 300px;
    padding-top: 80px;

    p:first-child {
      font-size: 350px;
    }

    p:nth-child(2) {
      font-size: 20px;
    }

    button {
      width: 180px;
      height: 45px;
      font-size: 14px;
    }
  } // error page responsive end

  @media (max-width: 768px) {
    height: 250px;
    margin: 0 auto;
    p:first-child {
      font-size: 250px;
    }

    p:nth-child(2) {
      font-size: 16px;
      margin-bottom: 40px;
    }

    button {
      width: 150px;
      height: 40px;
      font-size: 12px;
    }
  }

  @media (max-width: 480px) {
    height: 200px;
    margin: 0 auto;

    p:first-child {
      font-size: 150px;
    }

    p:nth-child(2) {
      font-size: 14px;
      margin-bottom: 30px;
    }

    button {
      width: 120px;
      height: 35px;
      font-size: 10px;
    }
  }
`;
