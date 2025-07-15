import { CardsWrapper, CardsWrapper2, CatalogPageWrapper, ContributorsSliderWrapper, TitleWrapper } from "./CatalogPage.styles"
import { ContributorsSlider } from "../Home/Swipers/index"
import { Blog, Cooperation } from "../Home/Main/index"

const CatalogPage = () => {
    const cards = [
        {
            title: "Люстры",
            price: "От 540₽ →",
            image: "/image2.png",
        },
        {
            title: "Светильники",
            price: "От 540₽ →",
            image: "/image5.png",
        },
        {
            title: "Бра",
            price: "От 540₽ →",
            image: "/image3.png",
        },
        {
            title: "Торшеры",
            price: "От 540₽ →",
            image: "/image6.png",
        },
        {
            title: "Настольные лампы",
            price: "От 540₽ →",
            image: "/image4.png",
        },
        {
            title: "Споты",
            price: "От 540₽ →",
            image: "/image7.png",
        },
        {
            title: "Трековые светильники",
            price: "От 540₽ →",
            image: "/image9.png",
        },
        {
            title: "Уличные светильники",
            price: "От 540₽ →",
            image: "/image10.png",
        },
        {
            title: "Технические светильники",
            price: "От 540₽ →",
            image: "/image11.png",
        },
    ];

    const cards2 = [
        {
            title: "Светодиодные ленты",
            price: "От 540₽ →",
            image: "/image12.png",
        },
        {
            title: "Комплектуюшие",
            price: "От 540₽ →",
            image: "/image13.png",
        }
    ]

    return (
        <>
            <CatalogPageWrapper>
                <TitleWrapper>
                    <p>Каталог</p>
                </TitleWrapper>
                <CardsWrapper>
                    {cards.map((card, index) => (
                        <div key={index} className="card">
                            <div className="texts">
                                <p>{card.title}</p>
                                <p>{card.price}</p>
                            </div>
                            <img src={card.image} alt={card.title} />
                        </div>
                    ))}
                </CardsWrapper>
                <CardsWrapper2>
                    {cards2.map((card, index) => (
                        <div key={index} className="card">
                            <div className="texts">
                                <p>{card.title}</p>
                                <p>{card.price}</p>
                            </div>
                            <img src={card.image} alt={card.title} />
                        </div>
                    ))}
                </CardsWrapper2>
            </CatalogPageWrapper>
            <ContributorsSliderWrapper>
                <ContributorsSlider />
            </ContributorsSliderWrapper>
            <Blog />
            <Cooperation />
        </>
    )
}

export default CatalogPage