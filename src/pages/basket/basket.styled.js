import styled, { css } from "styled-components";
import { FaRegTrashAlt } from "react-icons/fa";

const sizes = {
  desktop: 1299,
  tablet: 992, 
  phone: 768,
  smallPhone: 480,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const Container = styled.div`
  width: 1300px;
  margin: 70px auto 0 auto;

  ${media.desktop` /* 1299px va undan kichik */
    width: 95%;
    margin: 50px auto 0 auto;
  `}

  ${media.tablet` /* 992px va undan kichik */
    width: 98%;
    margin: 40px auto 0 auto;
  `}

  ${media.phone` /* 768px va undan kichik */
    width: 100%;
    padding: 0 10px;
    margin: 30px auto 0 auto;
  `}

  ${media.smallPhone` /* 480px va undan kichik */
    padding: 0 5px;
    margin: 20px auto 0 auto;
  `}
`;

export const MainBox = styled.div`
  .box-p {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .korzinka-parag {
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #454545;
  }

  .title {
    /* @import url'lar styled-components ichida tavsiya etilmaydi. Global style'da foydalaning. */
    font-family: 'Manrope', sans-serif;
    font-weight: 700;
    width: 276px;
    font-size: 64px;
    line-height: 110.00000000000001%;
    letter-spacing: 0%;
    text-transform: capitalize;
    color: #454545;
    position: relative;

    span {
      position: absolute;
      top: 10px;
      right: 0;
      background-color: red;
      color: white;
      font-size: 12px;
      width: 16px;
      height: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      overflow: hidden;
    }

    ${media.desktop` /* 1299px va undan kichik */
      font-size: 56px;
      width: auto;
    `}

    ${media.tablet` /* 992px va undan kichik */
      font-size: 48px;
      span {
        font-size: 10px;
        width: 14px;
        height: 14px;
        top: 5px;
        right: 0;
      }
    `}

    ${media.phone` /* 768px va undan kichik */
      font-size: 40px;
      text-align: center;
      span {
        font-size: 9px;
        width: 12px;
        height: 12px;
        top: 2px;
        right: 20%;
      }
    `}

    ${media.smallPhone` /* 480px va undan kichik */
      font-size: 32px;
      span {
        font-size: 8px;
        width: 10px;
        height: 10px;
        top: 0px;
        right: 15%;
      }
    `}
  }

  ${media.phone` /* 768px va undan kichik */
    .box-p {
      justify-content: center;
    }
    .korzinka-parag {
      font-size: 15px;
    }
  `}

  ${media.smallPhone` /* 480px va undan kichik */
    .korzinka-parag {
      font-size: 14px;
    }
  `}
`;

export const BoxKorzinka = styled.div`
  width: 100%;
  height: auto;
  background-color: #F2F2F2;
  border-radius: 20px;
  margin-top: 40px;
  padding: 0 50px 20px 50px;

  .nav-part {
    /* @import url'lar styled-components ichida tavsiya etilmaydi. Global style'da foydalaning. */
    font-family: 'Manrope', sans-serif;
    display: flex;
    align-items: center;
    width: 100%;
    height: 80px;
    justify-content: space-around;
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;
    opacity: 0.5;
    border-bottom: 1px solid gray;
  }

  .box-getProduct {
    /* @import url'lar styled-components ichida tavsiya etilmaydi. Global style'da foydalaning. */
    font-family: 'Manrope', sans-serif;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 30px 0;
    border-top: 1px solid #aaaaa9ff;

    .box-img {
      width: 80px;
      height: 80px;
      margin-right: 20px;
      border-radius: 15px;
      background-color: #FFFFFF;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .box-price {
      .price-text {
        width: 174px;
        font-weight: 600;
        font-size: 16px;
        line-height: 130%;
        letter-spacing: 0%;
        text-transform: capitalize;
        color: #454545;
      }

      .price {
        font-weight: 700;
        font-size: 20px;
        line-height: 110.00000000000001%;
        letter-spacing: 0%;
        color: #454545;
        margin-top: 13px;
      }
    }

    .paragrf-middle {
      width: 290px;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      letter-spacing: 0%;
      text-transform: capitalize;
      color: #454545;
      margin-top: -8px;
    }

    .paragrf-middleTwo {
      width: 256px;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      letter-spacing: 0%;
      text-transform: capitalize;
      color: #454545;
    }

    .box-count {
      width: 120px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .count {
        width: 60px;
        height: 60px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #a5a5a5ff;
        font-weight: 500;
        font-size: 16px;
        line-height: 100%;
      }

      button {
        font-weight: 500;
        font-size: 24px;
        line-height: 100%;
        letter-spacing: 0%;
        color: #454545;
        border: none;
        cursor: pointer;
      }
    }

    .btn-trash {
      border: none;
      cursor: pointer;
      margin-left: 10px;
    }
  }

  ${media.desktop` /* 1299px va undan kichik */
    padding: 0 30px 20px 30px;
    height: auto;
    .nav-part {
      font-size: 15px;
      height: 70px;
    }
    .box-getProduct {
      padding: 20px 0;
      .box-img {
        width: 70px;
        height: 70px;
        margin-right: 15px;
      }
      .box-price {
        .price-text {
          width: 150px;
          font-size: 15px;
        }
        .price {
          font-size: 18px;
        }
      }
      .paragrf-middle,
      .paragrf-middleTwo {
        width: 220px;
        font-size: 15px;
      }
      .box-count {
        width: 100px;
        .count {
          width: 50px;
          height: 50px;
          font-size: 15px;
        }
        button {
          font-size: 20px;
        }
      }
    }
  `}

  ${media.tablet` /* 992px va undan kichik */
    padding: 0 15px 15px 15px;
    margin-top: 30px;
    .nav-part {
      font-size: 14px;
      height: 60px;
    }
    .box-getProduct {
      flex-wrap: wrap;
      justify-content: center;
      padding: 15px 0;
      .box-img {
        width: 60px;
        height: 60px;
        margin-right: 0;
        margin-bottom: 10px;
      }
      .box-price {
        text-align: center;
        width: 100%;
        margin-bottom: 10px;
        .price-text {
          width: auto;
          font-size: 14px;
        }
      }
      .paragrf-middle,
      .paragrf-middleTwo {
        width: 100%;
        text-align: center;
        font-size: 14px;
        margin-bottom: 10px;
      }
      .box-count {
        width: 100%;
        justify-content: center;
        margin-bottom: 10px;
        .count {
          width: 45px;
          height: 45px;
          font-size: 14px;
        }
        button {
          font-size: 18px;
        }
      }
      .btn-trash {
        margin-left: 0;
        width: 100%;
        text-align: center;
      }
    }
  `}

  ${media.phone` /* 768px va undan kichik */
    padding: 0 10px 10px 10px; /* Pastki paddingni kamaytirish */
    margin-top: 20px;
    .nav-part {
      display: none; /* Navigatsiya qismini yashirish */
    }
    .box-getProduct {
      flex-direction: column; /* Mahsulot elementlarini ustma-ust joylash */
      align-items: center;
      padding: 10px 0;
      .box-img {
        width: 50px;
        height: 50px;
        margin-bottom: 5px;
      }
      .box-price {
        margin-bottom: 5px;
        .price-text {
          font-size: 12px;
        }
        .price {
          font-size: 16px;
        }
      }
      .paragrf-middle,
      .paragrf-middleTwo {
        font-size: 13px;
        margin-top: 0;
        margin-bottom: 5px;
      }
      .box-count {
        .count {
          width: 40px;
          height: 40px;
          font-size: 13px;
        }
        button {
          font-size: 16px;
        }
      }
    }
  `}

  ${media.smallPhone` /* 480px va undan kichik */
    margin-top: 15px;
    padding: 0 5px 10px 5px;
    .box-getProduct {
      .box-img {
        width: 40px;
        height: 40px;
      }
      .box-price {
        .price-text {
          font-size: 12px;
        }
        .price {
          font-size: 16px;
        }
      }
      .paragrf-middle,
      .paragrf-middleTwo {
        font-size: 12px;
      }
      .box-count {
        .count {
          width: 35px;
          height: 35px;
          font-size: 12px;
        }
        button {
          font-size: 14px;
        }
      }
    }
  `}
`;

export const BtnTrashIcon = styled(FaRegTrashAlt)`
  cursor: pointer;
  border: none;
  font-size: 23px;

  ${media.desktop` /* 1299px va undan kichik */
    font-size: 20px;
  `}

  ${media.tablet` /* 992px va undan kichik */
    font-size: 18px;
  `}

  ${media.phone` /* 768px va undan kichik */
    font-size: 16px;
  `}

  ${media.smallPhone` /* 480px va undan kichik */
    font-size: 14px;
  `}
`;

export const BoxRegister = styled.div`
  /* @import url'lar styled-components ichida tavsiya etilmaydi. Global style'da foydalaning. */
  font-family: 'Manrope', sans-serif;
  width: 100%;
  height: 628px;
  border-radius: 20px;
  margin-top: 30px;
  background-color: #F2F2F2;
  padding: 50px 70px 0px 70px;

  .box-inputs {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 30px;
  }

  hr {
    border: 1px solid #000000;
    margin-top: 50px;
    opacity: 0.1;
  }

  .box-dostavka {
    .adres {
      display: block;
      width: 767px;
      height: 49.03303146362305px;
      color: #454545;
      border: 1px solid #454545;
      border-radius: 100px;
      font-weight: 600;
      font-size: 16px;
      line-height: 130%;
      letter-spacing: 0%;
      color: #454545;
      padding-left: 20px;
      margin-top: 40px;
      font-family: 'Manrope', sans-serif;
    }

    .comment {
      display: block;
      width: 767px;
      height: 150.87086486816406px;
      border-radius: 26px;
      border: 1px solid #454545;
      font-weight: 600;
      font-family: 'Manrope', sans-serif;
      font-size: 16px;
      line-height: 130%;
      letter-spacing: 0%;
      color: #454545;
      padding-left: 20px;
      padding-top: 10px;
      margin-top: 20px;
    }
  }

  ${media.desktop` /* 1299px va undan kichik */
    padding: 40px 50px 0px 50px;
    height: auto;
    .box-inputs {
      flex-wrap: wrap;
      justify-content: center;
      gap: 15px;
    }
    .box-dostavka {
      .adres,
      .comment {
        width: 100%;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
      }
    }
  `}

  ${media.tablet` /* 992px va undan kichik */
    padding: 30px 30px 0px 30px;
    margin-top: 20px;
    hr {
      margin-top: 30px;
    }
    .box-inputs {
      flex-direction: column; /* Rasmdagi kabi ustma-ust joylash */
      gap: 15px; /* Bo'shliqni moslash */
      input {
        width: 100%; /* To'liq kenglik */
        max-width: 300px; /* Maksimal kenglikni cheklash */
        height: 40px; /* Balandlikni moslash */
        border-radius: 100px; /* Rasmdagi kabi yumaloq burchaklar */
        border: 1px solid #454545;
        padding: 0 20px; /* Ichki padding */
        font-size: 16px;
        color: #454545;
        font-weight: 600;
        font-family: 'Manrope', sans-serif;
        box-sizing: border-box; /* Paddingni kenglikka kiritish */
      }
    }
    .box-dostavka {
      .adres,
      .comment {
        font-size: 14px;
        padding-left: 15px;
        margin-top: 20px;
        width: 100%;
        max-width: 300px; /* Rasmdagi kabi kenglikni cheklash */
        margin-left: auto;
        margin-right: auto;
      }
      .comment {
        height: 100px; /* Rasmdagi kabi balandlikni moslash */
        resize: vertical; /* Faqat vertikal o'lchamini o'zgartirishga ruxsat berish */
      }
    }
  `}

  ${media.phone` /* 768px va undan kichik */
    padding: 20px 15px 0px 15px;
    margin-top: 15px;
    .box-inputs {
      gap: 10px;
      input {
        width: 100%;
        max-width: 300px;
        margin: 0 auto;
      }
    }
    hr {
      margin-top: 20px;
    }
    .box-dostavka {
      .adres,
      .comment {
        font-size: 13px;
        padding-left: 10px;
        margin-top: 15px;
        height: auto;
        min-height: 40px;
      }
    }
  `}

  ${media.smallPhone` /* 480px va undan kichik */
    padding: 15px 10px 0px 10px;
    margin-top: 10px;
    .box-inputs input {
      font-size: 14px;
      height: 40px;
    }
    hr {
      margin-top: 20px;
    }
    .box-dostavka {
      .adres,
      .comment {
        font-size: 12px;
        min-height: 35px;
        margin-top: 10px;
      }
    }
  `}
`;

export const Oplata = styled.div`
  /* @import url'lar styled-components ichida tavsiya etilmaydi. Global style'da foydalaning. */
  font-family: 'Manrope', sans-serif;
  width: 100%;
  height: 361px;
  border-radius: 20px;
  background-color: #F2F2F2;
  padding: 50px 70px 0px 70px;
  margin-top: 50px;
  margin-bottom: 80px;

  .box-sendPrice {
    display: flex;
    gap: 30px;
    margin-top: 30px;

    P {
      font-weight: 600;
      font-size: 16px;
      line-height: 130%;
      letter-spacing: 0%;
      text-transform: capitalize;
      color: #454545;
      opacity: 0.5;
    }
  }

  .p-price {
    font-weight: 700;
    font-size: 24px;
    line-height: 110.00000000000001%;
    letter-spacing: 0%;
    text-transform: capitalize;
    color: #454545;
    margin-top: 50px;
  }

  .box-btn {
    display: flex;
    align-items: center;
    gap: 40px;
    margin-top: 50px;

    button {
      width: 324px;
      height: 50px;
      border-radius: 100px;
      background-color: #454545;
      font-weight: 500;
      font-size: 16px;
      line-height: 100%;
      font-family: 'Manrope', sans-serif;
      letter-spacing: 0%;
      color: #FFFFFF;
      border: none;
      cursor: pointer;
      transition: all 0.5s;

      &:hover {
        background-color: #FFFFFF;
        border: 1px solid #454545;
        color: #454545;
      }
    }

    div {
      display: flex;
      align-items: center;
      gap: 5px;

      span {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #454545;
        border-radius: 50%;
        width: 22px;
        height: 22px;
      }
    }

    p {
      font-weight: 600;
      font-size: 12px;
      line-height: 130%;
      letter-spacing: 0%;
      color: #454545;
      opacity: 0.5;
    }
  }

  ${media.desktop` /* 1299px va undan kichik */
    padding: 40px 50px 0px 50px;
    height: auto;
    .box-sendPrice {
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
    }
    .box-btn {
      flex-direction: column;
      gap: 20px;
      align-items: center;
      button {
        width: 80%;
        max-width: 300px;
      }
    }
  `}

  ${media.tablet` /* 992px va undan kichik */
    padding: 30px 30px 0px 30px;
    margin-top: 30px;
    margin-bottom: 50px;
    .box-sendPrice {
      flex-direction: column; /* Rasmdagi kabi ustma-ust joylash */
      gap: 10px; /* Bo'shliqni moslash */
      align-items: center; /* Markazga joylash */
      p {
        font-size: 15px;
        width: 100%; /* To'liq kenglik */
        text-align: center; /* Matnni markazga joylash */
      }
    }
    .p-price {
      font-size: 20px;
      margin-top: 30px;
      text-align: center; /* Markazga joylash */
    }
    .box-btn {
      margin-top: 30px;
      flex-direction: column;
      gap: 15px; /* Bo'shliqni moslash */
      button {
        width: 100%; /* To'liq kenglik */
        max-width: 300px; /* Maksimal kenglikni cheklash */
        height: 45px;
        font-size: 15px;
      }
      div {
        flex-direction: column; /* Rasmdagi kabi ustma-ust joylash */
        gap: 5px; /* Bo'shliqni moslash */
        text-align: center; /* Matnni markazga joylash */
        p {
          font-size: 12px;
          opacity: 0.7; /* Rasmdagi kabi biroz qoraroq */
        }
      }
    }
  `}

  ${media.phone` /* 768px va undan kichik */
    padding: 20px 15px 0px 15px;
    margin-top: 20px;
    margin-bottom: 40px;
    .box-sendPrice {
      flex-direction: column;
      gap: 10px;
      p {
        font-size: 14px;
      }
    }
    .p-price {
      font-size: 18px;
      text-align: center;
      margin-top: 20px;
    }
    .box-btn {
      button {
        width: 90%;
        max-width: 280px;
        height: 45px;
        font-size: 14px;
      }
      div p {
        font-size: 11px;
      }
    }
  `}

  ${media.smallPhone` /* 480px va undan kichik */
    padding: 15px 10px 0px 10px;
    margin-top: 15px;
    margin-bottom: 30px;
    .box-sendPrice p {
      font-size: 14px;
    }
    .p-price {
      font-size: 16px;
    }
    .box-btn {
      button {
        height: 40px;
        font-size: 13px;
      }
      div span {
        width: 20px;
        height: 20px;
      }
      div p {
        font-size: 10px;
      }
    }
  `}
`;