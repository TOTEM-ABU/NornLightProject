import styled from "styled-components";

export const Card1 = styled.div`
  width: 420px;
  height: 250px;
  border-radius: 20px;
  background-color: #f2f2f2;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-around;
  transition: all 0.5s;

  .box-text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@100;200;300;400;500;600;800&display=swap");
    font-family: "Manrope", sans-serif;

    h5 {
      font-weight: 500;
      font-size: 20px;
      line-height: 110.00000000000001%;
      letter-spacing: 0%;
      color: #454545;
    }

    p {
      font-weight: 500;
      font-size: 14px;
      line-height: 110.00000000000001%;
      letter-spacing: 0%;
      color: #454545;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;

      i {
        color: #9f9f9f;
        font-size: 20px;
      }
    }
  }

  &:hover {
    background-color: #454545;

    p, h5{
      color: #ffffff;
    }
  }
`;

export const Card2 = styled.div`
  width: 300px;
  height: 395px;
  position: relative;

  .Heart-box{
    position: absolute;
    right: 5px;
    top: 3px;
    cursor: pointer;
  }

  .img-Box{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .text{
    width: 200px;
  }

  .box-price{
    margin-top: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .launched{
      @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@100;200;300;400;500;600;800&display=swap");
      font-family: "Manrope", sans-serif;
      font-weight: 500;
      font-size: 12px;
      line-height: 110.00000000000001%;
      letter-spacing: 0%;
      text-decoration: line-through;
      color: #9F9F9F;
    }

    .true-price{
      @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@100;200;300;400;500;600;800&display=swap");
      font-family: "Manrope", sans-serif;
      font-weight: 700;
      font-size: 20px;
      line-height: 110.00000000000001%;
      letter-spacing: 0%;
      color: #454545;
    }
  }
`;
