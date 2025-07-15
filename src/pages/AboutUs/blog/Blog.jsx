import { BlogPageWrapper, CardsWrapper, TitleWrapper } from "./BlogPage.styles";

const BlogPage_2 = () => {
  const cards = [
    {
      image: "/Rectangle 12.png",
      title1: "Как правильно освещать дом ",
      title2: "снаружи?",
      icon: "/Vector 4.png",
      date: "01.01.2024",
    },
    {
      image: "/Rectangle 12(1).png",
      title1: "Как правильно освещать дом ",
      title2: "снаружи?",
      icon: "/Vector 4.png",
      date: "01.01.2024",
    },
    {
      image: "/Rectangle 12(2).png",
      title1: "Как правильно освещать дом ",
      title2: "снаружи?",
      icon: "/Vector 4.png",
      date: "01.01.2024",
    },
  ];

  return (
    <BlogPageWrapper>
      <TitleWrapper>
        <p>Блог</p>
      </TitleWrapper>
      <CardsWrapper>
        {cards.map((card, index) => (
          <div key={index} className="card">
            <img src={card.image} alt="" />
            <div className="texts">
              <p>{card.title1}</p>
              <p>{card.title2}</p>
            </div>
            <div className="icons">
              <img src={card.icon} alt="" />
              <p>{card.date}</p>
              <hr className="line" />
            </div>
          </div>
        ))}
      </CardsWrapper>
    </BlogPageWrapper>
  );
};

export default BlogPage_2;
