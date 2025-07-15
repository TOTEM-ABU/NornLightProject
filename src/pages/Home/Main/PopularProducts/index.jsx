import React, { useState } from 'react'
import { CardsWrapper, PopularProductsWrapper, TitleButtonWrapper, ViewAllButtonWrapper, HeartIcon, HeartIconTwo } from './PopularProducts.styles'
import { Link, NavLink } from 'react-router'
import { Button } from '../../../../components'

const PopularProducts = () => {
    const [cards, setProducts] = useState([        {
            id: 1,
            image: "/image8.png",
            heartIcon: "/Vector.png",
            title1: "Встраиваемый",
            title2: "светильник Novotech",
            oldPrice: "7 000₽",
            newPrice: "6 399₽",
            basketIcon: "/Vector(1).png",
            like: false
        },
        {
            id: 2,
            image: "/image8.png",
            heartIcon: "/Vector.png",
            title1: "Встраиваемый",
            title2: "светильник Novotech",
            oldPrice: "7 000₽",
            newPrice: "6 399₽",
            basketIcon: "/Vector(1).png",
            like: false
        },
        {
            id: 3,
            image: "/image8.png",
            heartIcon: "/Vector.png",
            title1: "Встраиваемый",
            title2: "светильник Novotech",
            oldPrice: "7 000₽",
            newPrice: "6 399₽",
            basketIcon: "/Vector(1).png",
            like: false
        },
        {
            id: 4,
            image: "/image8.png",
            heartIcon: "/Vector.png",
            title1: "Встраиваемый",
            title2: "светильник Novotech",
            oldPrice: "7 000₽",
            newPrice: "6 399₽",
            basketIcon: "/Vector(1).png",
            like: false
        },
        {
            id: 5,
            image: "/image8.png",
            heartIcon: "/Vector.png",
            title1: "Встраиваемый",
            title2: "светильник Novotech",
            oldPrice: "7 000₽",
            newPrice: "6 399₽",
            basketIcon: "/Vector(1).png",
            like: false
        },
        {
            id: 6,
            image: "/image8.png",
            heartIcon: "/Vector.png",
            title1: "Встраиваемый",
            title2: "светильник Novotech",
            oldPrice: "7 000₽",
            newPrice: "6 399₽",
            basketIcon: "/Vector(1).png",
            like: false
        },
        {
            id: 7,
            image: "/image8.png",
            heartIcon: "/Vector.png",
            title1: "Встраиваемый",
            title2: "светильник Novotech",
            oldPrice: "7 000₽",
            newPrice: "6 399₽",
            basketIcon: "/Vector(1).png",
            like: false
        },
        {
            id: 8,
            image: "/image8.png",
            heartIcon: "/Vector.png",
            title1: "Встраиваемый",
            title2: "светильник Novotech",
            oldPrice: "7 000₽",
            newPrice: "6 399₽",
            basketIcon: "/Vector(1).png",
            like: false
        }])

    function changeLike(productId){

        const newProduct = cards.map((item) => {
            if(item.id == productId){
                return {...item, like: true};
            } else {
                return item;
            }
        });

        setProducts(newProduct);
    }

    return (
        <PopularProductsWrapper>
            <TitleButtonWrapper>
                <p>Популярные товары</p>
                <Link to={"/products"}>
                    <button>Все товары →</button>
                </Link>
            </TitleButtonWrapper>
                <CardsWrapper>
                    {cards.map((product, index) => (
                        <div key={index} className="card">
                            <img src={product?.image} alt="" className='productImage' />
                            <div onClick={() => changeLike(product?.id)}>
                               {product?.like ? < HeartIcon/> : < HeartIconTwo/> }
                            </div>
                            <div className="text-content">
                                <p className='title1'>{product?.title1}</p>
                                <p className='title2'>{product?.title2}</p>
                                <p className='oldPrice'>{product?.oldPrice}</p>
                                <div className='box-btn'>
                                    <p className='newPrice'>{product?.newPrice}</p>
                                    <Button type={'btnK'} />
                                </div>
                            </div>
                        </div>
                    ))}
                </CardsWrapper>
            <ViewAllButtonWrapper>
                <NavLink to={"/products"}>
                    <button>Все товары →</button>
                </NavLink>
            </ViewAllButtonWrapper>
        </PopularProductsWrapper>
    )
}

export default PopularProducts