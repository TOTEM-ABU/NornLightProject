import React, { useEffect, useRef, useState } from "react";
import { InputComponent, Typography } from "../../components";
import lustraImg from "./lustra.svg";

import {
  Container,
  MainBox,
  BoxKorzinka,
  BtnTrashIcon,
  BoxRegister,
  Oplata,
} from "./basket.styled";
import { NavLink, useLocation } from "react-router";

const BasketPage = () => {
  const [product, setProduct] = useState([
    {
      id: 1,
      img: lustraImg,
      priceText: "Встраиваемый светильник Novotech",
      price: "6 399₽",
      opisannie:
        "Светильник RADUGA COMBO XS Промышленное освещение; 50Вт; 230В; S4; XS;",
      artikul: "RAD-COMBO-50/XXX/230/XXX/XXX/S4/XS",
      count: 1,
    },
    {
      id: 2,
      img: lustraImg,
      priceText: "Встраиваемый светильник Novotech",
      price: "6 399₽",
      opisannie:
        "Светильник RADUGA COMBO XS Промышленное освещение; 50Вт; 230В; S4; XS;",
      artikul: "RAD-COMBO-50/XXX/230/XXX/XXX/S4/XS",
      count: 1,
    },
  ]);
  const sumPrice = useRef();
  const { state } = useLocation();
  
  useEffect(() => {

    if (state) {
      setProduct((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          img: lustraImg,
          priceText: "Встраиваемый светильник Novotech",
          price: "6 399₽",
          opisannie:
            "Светильник RADUGA COMBO XS Промышленное освещение; 50Вт; 230В; S4; XS;",
          artikul: "RAD-COMBO-50/XXX/230/XXX/XXX/S4/XS",
          count: 1,
        },
      ]);
    }
  }, [state]);

  useEffect(() => {
    const sum = product.reduce((sum, item) => {
      const priceNumber = parseInt(item.price.replace(/\s|₽/g, ""));
      return sum + priceNumber * item.count;
    }, 0);
    sumPrice.current.textContent = `${sum}₽`;
  }, [product]);

  function deleteProductFn(itemId) {
    const newProduct = product.filter((item) => item.id !== itemId);
    setProduct(newProduct);
  }

  function incrementFn(itemId) {
    const update = product.map((item) => {
      if (item.id == itemId) {
        return { ...item, count: item.count + 1 };
      } else {
        return item;
      }
    });
    setProduct(update);
  }

  function decrementFn(itemId) {
    const update = product.map((item) => {
      if (item.id == itemId) {
        if (item.count > 0) {
          return { ...item, count: item.count - 1 };
        }
        return item;
      } else {
        return item;
      }
    });
    setProduct(update);
  }

  return (
    <Container>
      <MainBox>
        <div className="box-p">
          <Typography type={"Menu"} text="Главная >" />
          <Typography type={"Menu"} text="Каталог >" />
          <p className="korzinka-parag">Корзина</p>
        </div>
        <div className="title">
          Корзина <span>2</span>
        </div>

        <BoxKorzinka>
          <div className="nav-part">
            <p>Фото</p>
            <p>Товары</p>
            <p>Описание</p>
            <p>Артикул</p>
            <p>Количество</p>
          </div>

          {product.map((item) => {
            return (
              <div key={item.id} className="box-getProduct">
                <div className="box-img">
                  <img src={item.img} alt="this lustra img" />
                </div>

                <div className="box-price">
                  <p className="price-text">{item.priceText}</p>
                  <p className="price">{item.price}</p>
                </div>

                <p className="paragrf-middle">{item.opisannie}</p>
                <p className="paragrf-middleTwo"> {item.artikul} </p>

                <div className="box-count">
                  <button
                    onClick={() => decrementFn(item.id)}
                    className="btn-minus"
                  >
                    -
                  </button>
                  <div className="count">{item.count}</div>
                  <button
                    onClick={() => incrementFn(item.id)}
                    className="btn-plas"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => deleteProductFn(item.id)}
                  className="btn-trash"
                >
                  <BtnTrashIcon />
                </button>
              </div>
            );
          })}
        </BoxKorzinka>

        <BoxRegister>
          <Typography type={"H2"} text="Оформление" />
          <div className="box-inputs">
            <InputComponent type={"Fio"} text={"ФИО"} />
            <InputComponent type={"Number"} text={"телефон"} />
            <InputComponent type={"Email"} text={"Электронная почта"} />
          </div>
          <hr />

          <div className="box-dostavka">
            <Typography type={"H2"} text="Доставка" />
            <input className="adres" type="text" placeholder="Адрес доставки" />
            <textarea
              className="comment"
              name="comment"
              id=""
              placeholder="Комментарий"
            ></textarea>
          </div>
        </BoxRegister>

        <Oplata>
          <Typography type={"H2"} text="Оплата" />
          <div className="box-sendPrice">
            <p>Товары.............................................12 300₽</p>
            <p>Доставка..............................................580₽</p>
          </div>
          <p ref={sumPrice} className="p-price">
            12 800₽
          </p>
          <div className="box-btn">
            <NavLink to={'/shipping'}>
              <button>Купить</button>
            </NavLink>
            <div>
              <span>✔️</span>
              <p> Я согласен наобработку моих персональных данных</p>
            </div>
          </div>
        </Oplata>
      </MainBox>
    </Container>
  );
};

export default BasketPage;
