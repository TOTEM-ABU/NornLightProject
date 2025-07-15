import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper2Wrapper, TitleNavigationWrapper, BrandCard } from "./Swiper2.styles";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ContributorsSlider = () => {
    const brandLogos = [
        { image: "Contributors1.png", alt: "Contributors logo" },
        { image: "Contributors2.png", alt: "Contributors logo" },
        { image: "Contributors3.png", alt: "Contributors logo" },
        { image: "Contributors1.png", alt: "Contributors logo" },
        { image: "Contributors2.png", alt: "Contributors logo" },
        { image: "Contributors3.png", alt: "Contributors logo" },
    ];

    return (
        <Swiper2Wrapper>
            <TitleNavigationWrapper>
                <p>Только проверенные бренды</p>
                <div className="swiper-navigation-buttons">
                    <button className="swiper-button-prev-custom" aria-label="Previous slide">
                        <ArrowLeft size={20} />
                    </button>
                    <button className="swiper-button-next-custom" aria-label="Next slide">
                        <ArrowRight size={20} />
                    </button>
                </div>
            </TitleNavigationWrapper>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                navigation={{
                    prevEl: ".swiper-button-prev-custom",
                    nextEl: ".swiper-button-next-custom",
                }}
                modules={[Navigation]}
                className="mySwiper"
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
            >
                {brandLogos.map((logo, index) => (
                    <SwiperSlide key={index}>
                        <BrandCard>
                            <img src={logo.image || "/placeholder.svg"} alt={logo.alt} />
                        </BrandCard>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Swiper2Wrapper>
    );
};

export default ContributorsSlider;