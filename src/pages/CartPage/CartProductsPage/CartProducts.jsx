import { useState } from "react";
import { styled } from "styled-components";

export default function CartProducts(props) {
    const { name, description, value, image } = props;
    const [counter, setCounter] = useState(0);
    const [subtotal, setSubtotal] = useState(0);
    
    function minus() {
        setCounter(counter => counter - 1);
        let numberFormat = parseFloat(value.replace(/\./g, "").replace(",", ".")).toFixed(2);
        let mult = counter * numberFormat;
        let subtotalWithSeparator = mult.toLocaleString('pt-BR');
        setSubtotal(subtotalWithSeparator);
    }
    function plus() {
        setCounter(counter => counter + 1);
        let numberFormat = parseFloat(value.replace(/\./g, "").replace(",", ".")).toFixed(2);
        let mult = counter * numberFormat;
        let subtotalWithSeparator = mult.toLocaleString('pt-BR');
        setSubtotal(subtotalWithSeparator);        
    }

    return (
        <ItemList >
            <div>
                <img src={image}/>
                <InfoItem>
                    <p>{name}</p>
                    <p>{description}</p>
                </InfoItem>
            </div>
            <div>
                <Counter>
                    <div>
                        <p>R${value}</p>
                    </div>
                    <CounterButton>
                        <div>
                            <button onClick={minus}>-</button>
                        </div>
                        <div>{counter}</div>
                        <div>
                            <button onClick={plus}>+</button>
                        </div>
                    </CounterButton>
                    <div>
                        <p>R${subtotal}</p>
                    </div>
                </Counter>
            </div>
        </ItemList>
    )
}


const ItemList = styled.div`
    width: 100%;
    height: 80px;
    border: 1px solid #000000;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
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