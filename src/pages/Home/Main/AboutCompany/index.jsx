import { Link } from "react-router"
import { AboutCompanyWrapper, CardsWrapper, TitleButtonWrapper, ViewAllButtonWrapper } from "./AboutCompany.styles"

const AboutCompany = () => {
  const cards = [
    {
      icon: "/Group 123.png",
      title1: "Только проверенные",
      title2: "бренды",
      desc1: "Бренды, проверенные ",
      desc2: "временем и качеством"
    },
    {
      icon: "/Frame.png",
      title1: "Самые низкие цены",
      desc1: "Ниже не будет нигде",
    },
    {
      icon: "/Frame(1).png",
      title1: "Быстрая доствка",
      desc1: "Доставляем по всей РФ",
      desc2: "за 1-10 дней"
    },
    {
      icon: "/Group 126.png",
      title1: "Большой ",
      title2: "ассортимент",
      desc1: "Более 1000 товаров"
    }
  ]
  return (
    <AboutCompanyWrapper>
      <TitleButtonWrapper>
        <p>Почему NORNLIGHT?</p>
        <Link to={"/about-us"}>
          <button>О компании →</button>
        </Link>
      </TitleButtonWrapper>
      <CardsWrapper>
        {cards.map((card, index) => (
          <div key={index} className="card">
            <img src={card.icon} alt="Card icon" />
            <div className="texts">
              <p className="title1">{card.title1}</p>
              <p className="title2">{card.title2}</p>
              <p className="desc1">{card.desc1}</p>
              <p className="desc2">{card.desc2}</p>
            </div>
          </div>
        ))}
      </CardsWrapper>
      <ViewAllButtonWrapper>
        <Link to={"/about-us"}>
          <button>О компании →</button>
        </Link>
      </ViewAllButtonWrapper>
    </AboutCompanyWrapper>
  )
}

export default AboutCompany