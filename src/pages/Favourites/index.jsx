import { CardsComponents, Typography } from '../../components';
import { Container, MainBox } from './favourites.style'

const FavouritesPage = () => {
  return (
    <Container>
       <MainBox>
          < Typography type={'H2'} text='Избранные товары'/>
          <div className='box'>
            <CardsComponents type={'card2'} bezlike={false} />
            <CardsComponents type={'card2'} bezlike={false} />
            <CardsComponents type={'card2'} bezlike={false} />
            <CardsComponents type={'card2'} bezlike={false} />
          </div>
       </MainBox>
    </Container>
  )
}

export default FavouritesPage;