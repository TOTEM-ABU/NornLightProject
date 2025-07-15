"use client"
import { ContentSide, CooperationWrapper, TitleSide } from "./Cooperation.styles"

const Cooperation = () => {
    return (
        <CooperationWrapper>
            <TitleSide>
                <p>Производство</p>
                <p>светильников</p>
            </TitleSide>
            <ContentSide>
                <div className="content">
                    <div className="content1">
                        <p>
                            Интернет-магазин NORNLIGHT предлагает широкий ассортимент
                            светильников для освещения вашего дома или офиса. У нас вы
                            найдете разнообразные модели светильников, от современных и
                            стильных до классических и элегантных. Мы предлагаем
                            качественные и надежные светильники от лучших
                            производителей, которые подарят вам комфорт и уют
                        </p>
                    </div>
                    <div className="content2">
                        <p>
                            Покупая светильники в нашем интернет-магазине, вы получаете
                            отличное соотношение цены и качества. Мы осуществляем
                            доставку по всей России, чтобы каждый клиент мог насладиться
                            прекрасным светом и удобством покупки онлайн. Обратитесь к
                            нам сегодня и превратите ваш дом в оазис тепла и света с
                            NORNLIGHT!
                        </p>
                    </div>
                </div>
            </ContentSide>
        </CooperationWrapper>
    )
}

export default Cooperation
