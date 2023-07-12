import { styled } from "styled-components";

export default function CartPage() {

    const cartItem = [
        {
            id: 1,
            name: "mesa",
            image: "https://www.larshopping.com.br/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/w/h/whatsapp_image_2022-03-30_at_11.40.16_1_.jpeg",
            value: "R$ 3.000,00",
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
                    <ItemList >
                        <div>
                            <img  />
                            <InfoItem>
                                <p>Nome</p>
                                <p>Descrição</p>
                            </InfoItem>
                        </div>
                        <div>
                            <Counter>
                                <div>
                                    <p>R$</p>
                                </div>
                                <CounterButton>
                                    <div>
                                        <button>-</button>
                                    </div>
                                    <div>10</div>
                                    <div>
                                        <button>+</button>
                                    </div>
                                </CounterButton>
                                <div>
                                    <p>R$Total</p>
                                </div>
                            </Counter>
                        </div>
                    </ItemList>
                
        </CartContainer>
    )
}

const CartContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
`

const CartHeader = styled.div`
    width: calc(100vw - 40px);
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
        color: #004B99;
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
        color: #8893B6;
        margin-left: 10px;
    }
    }
    
`
const ItemList = styled.div`
    width: calc(100vw - 40px);
    height: 80px;
    border: 1px solid #000000;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        img {
        width: 60px;
        height: 60px;
        border: 1px solid #000000;
        border-radius: 5px;
        margin-right: 10px;
        }        
    }    
`

const InfoItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    p {
        font-size: 18px;
        font-weight: 400;
        color: #000000;
    }
`
const Counter = styled.div`
    border: 1px solid #000000;
    border-radius: 5px;
    display: flex;
    justify-content: flex-end;
    div {
        width: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
        p {
            font-size: 20px;
            font-weight: 700;
            color: #000000;
        }
        
    }
`
const CounterButton = styled.div`
    display: flex;
    justify-content: center;
    div {
        width: 20px;
        height: 20px;
        background-color: lightgray;
        text-align: center;
    }
`