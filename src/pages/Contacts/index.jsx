import React from "react";
import { ContactsPageWrapper } from "./Contacts.styled";

const ContactsPage = () => {
  return (
    <ContactsPageWrapper>
      <div className="contacts">
        <p className="contact">Контакты</p>
        <div className="adress">
          <p>8 (800) 890-46-56</p>
          <p>Пн-Пт: 10:00 до 19:00Сб-Вс: заказ через корзину Телефоны: </p>
        </div>
      </div>
      <div className="map">
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "20px",
            marginBottom: "120px",
          }}
        >
          <a
            href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps"
            style={{
              color: "#eee",
              fontSize: "12px",
              position: "absolute",
              top: "0px",
            }}
          >
            Ташкент
          </a>
          <a
            href="https://yandex.uz/maps/profile?ll=69.351835%2C41.311151&utm_medium=mapframe&utm_source=maps&z=12"
            style={{
              color: "#eee",
              fontSize: "12px",
              position: "absolute",
              top: "14px",
            }}
          >
            Яндекс Карты
          </a>
          <iframe
            src="https://yandex.uz/map-widget/v1/profile?ll=69.351835%2C41.311151&z=12"
            width="1800"
            height="672"
            frameBorder="0"
            allowFullScreen={true}
            style={{ position: "relative" }}
            title="Yandex Map"
          ></iframe>
        </div>
        <div className="pochta">
          <div>
            <p>Адрес магазина</p>
            <p>г. Москва, Дмитровское шоссе д.100с2</p>
          </div>
          <div>
            <p>Почта</p>
            <p>NORNLIGHT@mail.ru</p>
          </div>
          <div>
            <p>Телефон</p>
            <p>8 (800) 890-46-56</p>
          </div>
          <button>Оставить заявку</button>
        </div>
      </div>
    </ContactsPageWrapper>
  );
};

export default ContactsPage;
