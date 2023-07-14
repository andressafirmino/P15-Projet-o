import { useContext, useState } from "react";
import { styled } from "styled-components";
import CONTEXT from "../../../context/context";
import Trash from "../../.././assets/logos/trash-outline.svg";

export default function CartProducts(props) {
    const { name, value, image } = props;
    const { total, setTotal } = useContext(CONTEXT);
    const [counter, setCounter] = useState(1);
    const [subtotal, setSubtotal] = useState(parseFloat(value).toLocaleString("pt-BR"));
    
    function minus() {
        if (counter === 0 || total === 0) {
            return;
        }
        const newCounter = counter - 1;
        setCounter(newCounter > 0 ? newCounter : 0);
        const newSubtotal = (newCounter * value).toLocaleString("pt-BR");
        setSubtotal(newSubtotal);
        setTotal((prevTotal) => prevTotal - parseFloat(value));
    }
    function plus() {
        const newCounter = counter + 1;
        setCounter(newCounter);
        const newSubtotal = (newCounter * value).toLocaleString("pt-BR");
        setSubtotal(newSubtotal);
        setTotal((prevTotal) => prevTotal + parseFloat(value));
    }

    return (
        <ItemList >
            <InfoItem>
                <img src={image} />
                <p>{name}</p>
            </InfoItem>
            <Counter>
                <div>
                    <p>R${parseFloat(value).toLocaleString('pt-BR')}</p>
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
                <img src={Trash} />
            </Counter>
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
        
           
    }  
     
`

const InfoItem = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    p {
        font-size: 15px;
        font-weight: 400;
        color: #000000;
        overflow-wrap: break-word;
    }
    img {
        width: 60px;
        height: 60px;
        border: 1px solid #000000;
        border-radius: 5px;
        margin-right: 10px;
        }  
`
const Counter = styled.div`
    width: 50%;
    border: 1px solid #000000;
    display: flex;
    justify-content: flex-end;
    div {
        width: 100%;
        height: 60px;
        border: 1px solid #000000;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
        font-size: 20px;
        color: #000000;       
    }
    img {        
        width: 25px;
        height: auto;
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