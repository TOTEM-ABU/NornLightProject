import styled from "styled-components";

export const BtnBig = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@100;200;300;400;500;600;800&display=swap");
  width: 220px;
  height: 50px;
  border: 1px solid black;
  border-radius: 100px;
  color: #454545;
  background-color: #ffffff;
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0%;
  transition: all 0.5s;
  cursor: pointer;

  &:hover {
    background-color: #454545;
    color: #ffffff;
    border: none;
  }
`;

export const BtnNW = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@100;200;300;400;500;600;800&display=swap");
  width: 153px;
  height: 50px;
  border-radius: 100px;
  font-family: "Manrope", sans-serif;
  background-color: #454545;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #ffffff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
  cursor: pointer;

  div {
    width: 25px;
    height: 14px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-right: 10px;

    .smallP {
      width: 70%;
    }

    p {
      background-color: #ffffff;
      width: 100%;
      height: 2px;
      border: 1px solid #ffffff;
    }
  }

  img {
    margin-right: 10px;
  }

  &:hover {
    border: 1px solid black;
    background-color: #ffffff;
    color: #454545;

    p {
      border: 1px solid black;
    }
  }
`;

export const BtnScrol = styled.div`
  width: 150px;
  display: flex;
  .rightBtn {
    width: 49px;
    height: 26px;
    border-radius: 100px;
    border: 1px solid #454545;
    background-color: #ffffff;
    cursor: pointer;
    transition: all 0.5s;

    padding-top: 2px;
    i {
      font-size: 17px;
      height: 10px;
    }

    &:hover {
      background-color: #454545;
      color: white;
    }
  }

  .leftBtn {
    width: 49px;
    height: 26px;
    border-radius: 100px;
    padding-top: 2px;
    border: 1px solid rgb(163, 163, 163);
    background-color: #ffffff;
    transition: all 0.5s;
    cursor: pointer;

    i {
      font-size: 17px;
      height: 10px;
      color: rgb(163, 163, 163);
    }

    &:hover {
      background-color: #454545;
      i {
        color: white;
      }
    }
  }
`;

export const BtnK = styled.button`
  width: 55px;
  height: 33px;
  border-radius: 100px;
  background-color: #454545;
  border: none;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    background-color: rgb(30, 29, 29);
  }
`;
