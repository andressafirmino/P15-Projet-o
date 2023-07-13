import { useState } from "react";
import { styled } from "styled-components";
import CartProducts from "./CartProductsPage/CartProducts";
import Footer from "../../components/Footer";

export default function CartPage() {    
    
    const cartItem = [
        {
            id: 1,
            name: "mesa",
            image: "https://www.larshopping.com.br/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/w/h/whatsapp_image_2022-03-30_at_11.40.16_1_.jpeg",
            value: "3000.99",
            description: "Mesa com 6 lugares"
        },
        {
            id: 2,
            name: "mesa com 6 lugares",
            image: "https://www.larshopping.com.br/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/w/h/whatsapp_image_2022-03-30_at_11.40.16_1_.jpeg",
            value: "1120.99",
            description: "Mesa com 6 lugares"
        },
        {
            id: 3,
            name: "mesa com 3 lugares",
            image: "https://www.larshopping.com.br/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/w/h/whatsapp_image_2022-03-30_at_11.40.16_1_.jpeg",
            value: "2100.00",
            description: "Mesa com 6 lugares"
        }
    ]

    
    return (
        <CartContainer>
            <CartHeader>
                <p>Produtos</p>
                <div>
                    <div>Preço unitário</div>
                    <div>Quantidade</div>
                    <div>Preço Total</div>
                </div>
            </CartHeader>
            {cartItem.map(item => (<CartProducts key={item.id} 
            name={item.name} image={item.image}
            value={item.value} description={item.description}
            />))}  
            <Footer/>        
        </CartContainer>
    )
}

const CartContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
`

const CartHeader = styled.div`
    width: 100%;
    height: 60px;
    border: 1px solid #000000;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    p {
        font-size: 25px;
        color: #73384E;
    }
    div {
        display: flex;
        justify-content: flex-end;
        div {
        width: 200px;
        height: 60px;
        border: 1px solid #000000;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 25px;
        color: #73384E;
        margin-left: 10px;
    }
    }
    
`
