import { useContext, useState } from "react";
import { styled } from "styled-components";
import CartProducts from "./CartProductsPage/CartProducts";
import Footer from "../../components/Footer";
import Trash from "../.././assets/logos/trash-outline.svg"
import CONTEXT from "../../context/context";

export default function CartPage() {

    const { cartProducts, setCartProducts } = useContext(CONTEXT);
    const [deleteAll, setDeleteAll] = useState(false);

    function deleteA() {
        setDeleteAll(true);
    }
    function deleteItens() {
        setCartProducts([]);
        setDeleteAll(false);
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
                            <button onClick={deleteItens}>Deletar</button>
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
                {cartProducts.length === 0 && (                
                        <h1>Você não tem itens no carrinho</h1>                   
                )}
                {cartProducts.map(item => (<CartProducts key={item.id}
                    name={item.name} images={item.images} id={item.id}
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
    h1 {
        margin-top: 200px;
        font-size: 40px;
        color: lightgray;
    }
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