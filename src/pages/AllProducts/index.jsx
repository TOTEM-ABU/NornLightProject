import React from "react";
import { AllProductsPageWrapper } from "./allProductsPageStyled";
import CardsComponents from "../../components/Cards";

const AllProductsPage = () => {
  return (
    <AllProductsPageWrapper>
      <div className="cardWrapper">
        <p className="p-2">Популярные товары</p>
        <div className="cards">
          <CardsComponents type={"card2"} />
          <CardsComponents type={"card2"} />
          <CardsComponents type={"card2"} />
          <CardsComponents type={"card2"} />
          <CardsComponents type={"card2"} />
          <CardsComponents type={"card2"} />
          <CardsComponents type={"card2"} />
          <CardsComponents type={"card2"} />
        </div>
      </div>
    </AllProductsPageWrapper>
  );
};

export default AllProductsPage;
