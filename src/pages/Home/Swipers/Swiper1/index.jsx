import { useState } from "react";
import {
    Container,
    SwiperWrapper,
    SwiperSlide,
    SwiperCardsWrapper,
    TextSide,
    ImageSide,
    PaginationDot,
    PaginationDots,
    NavButton,
    ButtonWrapper
} from "./Swiper1.styles";

const ImageSliderComponent = () => {
    const rawSlides = [
        {
            title: "Скидка 15%",
            subtitle1: "на все подвесные",
            subtitle2: "светильники",
            buttonText: "до 5 февраля",
            image: "/image1.png",
        },
        {
            title: "Новая коллекция",
            subtitle1: "современных",
            subtitle2: "светильников",
            buttonText: "подробнее",
            image: "/image1.png",
        },
        {
            title: "Бесплатная доставка",
            subtitle1: "при заказе",
            subtitle2: "от 10 000 ₽",
            buttonText: "оформить заказ",
            image: "/image1.png",
        },
        {
            title: "Скидка 15%",
            subtitle1: "на все подвесные",
            subtitle2: "светильники",
            buttonText: "до 5 февраля",
            image: "/image1.png",
        },
        {
            title: "Новая коллекция",
            subtitle1: "современных",
            subtitle2: "светильников",
            buttonText: "подробнее",
            image: "/image1.png",
        },
        {
            title: "Бесплатная доставка",
            subtitle1: "при заказе",
            subtitle2: "от 10 000 ₽",
            buttonText: "оформить заказ",
            image: "/image1.png",
        },
    ];

    const slides = [rawSlides[rawSlides.length - 1], ...rawSlides, rawSlides[0]];

    const [currentSlide, setCurrentSlide] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(true);

    const goToSlide = (index) => {
        setIsTransitioning(true);
        setCurrentSlide(index + 1);
    };

    const nextSlide = () => {
        setIsTransitioning(true);
        setCurrentSlide((prev) => prev + 1);
    };

    const prevSlide = () => {
        setIsTransitioning(true);
        setCurrentSlide((prev) => prev - 1);
    };

    const handleTransitionEnd = () => {
        if (currentSlide === slides.length - 1) {
            setIsTransitioning(false);
            setCurrentSlide(1);
        }

        if (currentSlide === 0) {
            setIsTransitioning(false);
            setCurrentSlide(slides.length - 2);
        }
    };

    return (
        <Container>
            <SwiperWrapper>
                <div
                    className="swiper-container"
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                        transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
                    }}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <SwiperCardsWrapper>
                                <TextSide>
                                    <h1>{slide.title}</h1>
                                    <h1>{slide.subtitle1}</h1>
                                    <h1>{slide.subtitle2}</h1>
                                    <span className="badge">{slide.buttonText}</span>
                                </TextSide>
                                <ImageSide>
                                    <img
                                        src={slide.image || "/placeholder.svg"}
                                        alt="Lighting"
                                        width={400}
                                        height={300}
                                    />
                                </ImageSide>
                            </SwiperCardsWrapper>
                        </SwiperSlide>
                    ))}
                </div>

                <ButtonWrapper>
                    <NavButton $direction="left" onClick={prevSlide}>
                        &lt;
                    </NavButton>
                    <NavButton $direction="right" onClick={nextSlide}>
                        &gt;
                    </NavButton>
                </ButtonWrapper>

                <PaginationDots>
                    {rawSlides.map((_, index) => (
                        <PaginationDot
                            key={index}
                            onClick={() => goToSlide(index)}
                            $active={currentSlide === index + 1}
                        />
                    ))}
                </PaginationDots>
            </SwiperWrapper>
        </Container>
    );
};

export default ImageSliderComponent;