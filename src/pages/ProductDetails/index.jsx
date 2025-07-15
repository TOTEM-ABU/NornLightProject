import React, { useState } from "react";
import {
  Character,
  HiddenSection,
  ProductDetailsWrapper,
  Section1,
  Section2,
} from "./ProductDetailsPageStyled";

import lyustra from "./icons/20230528180416535300 1.svg";
import icon1 from "./icons/socials.svg";
import icon2 from "./icons/socials (1).svg";
import icon3 from "./icons/socials (2).svg";
import icon4 from "./icons/socials (3).svg";
import icon5 from "./icons/socials (4).svg";
import heat from "./icons/heart.svg";

const ProductDetailsPage = () => {
  const [count, setCount] = useState(1);
  const [liked, setLiked] = useState(false);

  const icons = [icon1, icon2, icon3, icon4, icon5];
  const bikeSpecifications = [
    { title: "Цвет", content: "Жёлтый" },
    { title: "Год", content: "2016" },
    { title: "Диаметр колеса", content: "27.5" },
    { title: "Материал рамы", content: "Карбон" },
    { title: "Размер", content: "L" },
    { title: "Страна", content: "Швейцария" },
    { title: "Производитель", content: "Scott" },
    {
      title: "Покрышки",
      content:
        "Schwalbe Rocket Ron EVO / 2.1 127EPI Kevlar Bead Tubeless Easy / PaceStar compound",
    },
    {
      title: "Рама",
      content:
        "Scale Carbon / HMX-технология / технология IMP / Коническая рулевая труба / BB92 / Технология SDS / Дропауты IDS SL",
    },
    {
      title: "Подседельный Штырь",
      content:
        "Ritchey WCS 700 Series: Carbon Link FlexLogic / 31.6mm 900 Series: Carbon 2B SDS / 34.9mm",
    },
    {
      title: "Седло",
      content: "Ritchey WCS Streem V3 Titanium rails",
    },
    {
      title: "Вилка",
      content:
        "Rock Shox SID RL3 Air / демпфер DNA3 3-режима / 15mm QR axle / коническая рулевая труба / Удалённая блокировка, регулировка отскока / ход 100mm",
    },
  ];

  return (
    <ProductDetailsWrapper>
      <Section1>
        <img src={lyustra} alt="" />
        <HiddenSection>
          <img src={lyustra} alt="" />
          <img src={lyustra} alt="" />
          <img src={lyustra} alt="" />
          <img src={lyustra} alt="" />
        </HiddenSection>
        <div className="info">
          <p>Встраиваемый светильник Novotech</p>
          <div className="statistics">
            <div className="">
              <p>Scott</p>
              <p>Артикул : 7655-188</p>
              <p>В наличии</p>
            </div>
            <div className="icons">
              {icons.map((el, index) => {
                return <img src={el} alt="" key={index} />;
              })}
            </div>
          </div>
          <div className="price">
            <p>435 000 ₽</p>
            <p>522 000 ₽</p>
          </div>
          <p className="last-p">
            Профессиональный гоночный хардтейл для кросс-кантри уровня
            Чемпионата и Кубка Мира. Одна из самых легких рам среди гоночных
            хардтейлов для кросс-кантри.
          </p>
          <div className="basket">
            <div className="counter">
              <button onClick={() => setCount(count - 1)}>-</button>
              <p>{count}</p>
              <button onClick={() => setCount(count + 1)}>+</button>
            </div>
            <button className="korzina">В корзину</button>
            <img
              src={heat}
              alt=""
              className={liked ? "liked" : null}
              onClick={() => setLiked(!liked)}
            />
          </div>
        </div>
      </Section1>
      <Character>Характеристика</Character>
      <Section2>
        {bikeSpecifications.map((el, index) => (
          <div className="card" key={index}>
            <div>{el.title}</div>
            <div>{el.content}</div>
          </div>
        ))}
      </Section2>
    </ProductDetailsWrapper>
  );
};

export default ProductDetailsPage;
