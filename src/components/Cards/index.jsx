import { Card1, Card2 } from "./Cards.styles";
import heartImg from "./heartImg.svg";
import Button from "../Button";
import lyustraImgN from "./lyustraImg.svg";
import { NavLink } from "react-router";

const CardsComponents = ({ type, text, price, image, bezlike = true }) => {
  const cardTypes = ["card1", "card2"];

  const cardObj = {
    card1: (
      <Card1>
        <div className="box-text">
          <h5>{text}</h5>
          <p className="text-price">
            <span>{price}</span> <i class="fa-solid fa-arrow-right"></i>{" "}
          </p>
        </div>
        <div className="box-img">
          <img src={image} alt="this img" />
        </div>
      </Card1>
    ),

    card2: (
      <Card2>
        <p className="Heart-box">
          {bezlike && <img src={heartImg} alt="this img heart" />}
        </p>
        <NavLink to={'/products-details'}>
          <div className="img-Box">
            <img src={lyustraImgN} alt="this img lyustra" />
          </div>
        </NavLink>
        <p className="text">Встраиваемый светильник Novotech</p>
        <div className="box-price">
          <div>
            <p className="launched">7 000₽</p>
            <p className="true-price">6 399₽</p>
          </div>
          <Button type={"btnK"} />
        </div>
      </Card2>
    ),
  };

  if (!cardTypes.includes(type)) {
    return <h2>Type Xato Berilgan Cardga </h2>;
  } else {
    return cardObj[type];
  }
};

export default CardsComponents;
