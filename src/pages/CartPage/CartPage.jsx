import { useContext, useState } from "react";
import { styled } from "styled-components";
import CartProducts from "./CartProductsPage/CartProducts";
import Footer from "../../components/Footer";
import Trash from "../.././assets/logos/trash-outline.svg"
import CONTEXT from "../../context/context";

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

    const {cartProducts} = useContext(CONTEXT);
    const [deleteAll, setDeleteAll] = useState(false);

    function deleteA() {
        setDeleteAll(true);
    }
    function cancel() {
        setDeleteAll(false);
    }
    return (
        <>
            {deleteAll && (
                <DeleteContainer>
                    <div>
                        Deseja deletar todos os itens no carrinho?
                        <div>
                            <button onClick={cancel}>Cancelar</button>
                            <button>Deletar</button>
                        </div>
                    </div>
                </DeleteContainer>
            )}

            <CartContainer>
                <CartHeader>
                    <p>Produtos</p>
                    <div>
                        <div>Preço unitário</div>
                        <div>Quantidade</div>
                        <div>Preço Total</div>
                        <img onClick={deleteA} src={Trash} />
                    </div>

                </CartHeader>
                {cartProducts.map(item => (<CartProducts key={item.id}
                    name={item.name} images={item.images}
                    value={item.value} description={item.description}
                />))}
                <Footer />
            </CartContainer>
        </>
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
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    p {
        font-size: 25px;
        color: #73384E;
    }
    div {
        width: 50%;
        display: flex;
        justify-content: flex-end;
        border: 1px solid #000000;
        div {
        width: 100%;
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
    img {
        width: 25px;
        height: auto;
    } 
    }
    
    
`
const DeleteContainer = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
    background-color: rgba(255,255,255, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    div {
        width: 40%;
        height: 20%;
        background-color: #73384E;
        font-size: 30px;
        color: #FFFFFF;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 10px;
        div {
            display: flex;
            flex-direction: row;
            button {
                width: 100%;
                height: 30px;
                border-radius: 5px;
                border: none;
                margin: 10px 5px 0 ;
            }
        }
    }
`