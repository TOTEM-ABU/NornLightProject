import { HomeWrapper } from './Home.styles'
import { ContributorsSlider, ImageSliderComponent } from './Swipers'
import { Catalogue, AboutCompany, PopularProducts, Blog, Cooperation } from './Main'

const HomePage = () => {
    return (
        <>
            <ImageSliderComponent />
        <HomeWrapper>
            <Catalogue />
            <AboutCompany />
            <PopularProducts />
            <ContributorsSlider />
            <Blog />
            <Cooperation />
        </HomeWrapper>
        </>
    )
}

export default HomePage;