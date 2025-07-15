import { Link } from "react-router";
import { CardsWrapper, CatalogueWrapper, TitleButtonWrapper, ViewAllButtonWrapper } from "./Catalogue.styles";

const Catalogue = () => {
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
    ];

    return (
        <>
            <CatalogueWrapper>
                <TitleButtonWrapper>
                    <p>Каталог</p>
                    <Link to="/catalog">
                        <button>Весь каталог →</button>
                    </Link>
                </TitleButtonWrapper>
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
                <ViewAllButtonWrapper>
                    <Link to="/catalog">
                        <button>Весь каталог →</button>
                    </Link>
                </ViewAllButtonWrapper>
            </CatalogueWrapper>
        </>
    );
};

export default Catalogue;