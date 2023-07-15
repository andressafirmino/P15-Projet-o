import { useContext, useState } from "react";
import { styled } from "styled-components";
import CONTEXT from "../../context/context";

export default function Checkout() {

    const { total } = useContext(CONTEXT);
    const [pay, setPay] = useState("");
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [disabled, setDisabled] = useState(true);

    /* if( pay !== '' && name !== '' && address !== ''){
        setDisabled(false);
    }
 */
    return (
        <CheckoutContainer>
            <CheckBox>
                <p>
                    Confira seus dados:
                </p>
                <input placeholder="Nome" type="text" required value={name} onChange={(e) => setName(e.target.value)} />
                <input placeholder="Endereço" type="text" required value={address} onChange={(e) => setAddress(e.target.value)} />
                <input placeholder="E-mail" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <span>Método de pagamento:</span>
                <div>
                    <button type="button" onClick={() => setPay("Pix")} className={pay === "Pix" ? 'select' : ''}>Pix</button>
                    <button type="button" onClick={() => setPay("Cartão")} className={pay === "Cartão" ? 'select' : ''}>Cartão</button>
                    <button type="button" onClick={() => setPay("Boleto")} className={pay === "Boleto" ? 'select' : ''}>Boleto</button>
                </div>
            </CheckBox>
            <BoxContainer>
                <span>Pagamento total: R${total}</span>
                <button disabled={disabled}>Finalizar comprar</button>
            </BoxContainer>
        </CheckoutContainer>
    )
}

const CheckoutContainer = styled.div`
    width: 100%;
    height: 100%;
`

const CheckBox = styled.form`
    width: 100%;
    border-radius: 5px;
    border: 1px solid #000000;
    border-radius: 5px;
    margin-top: 40px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
        margin: 0 10px 10px;
        font-size: 30px;
        color: #73384E;
    }
    input {
        height: 50px;
        margin-bottom: 10px;
        padding: 10px;
        font-size: 20px;
        border-radius: 5px;
    }
    span {
        font-size: 15px;
        margin-bottom: 10px;
        margin-left: 10px;
    }
    div {
        width: 80%;
        margin: 0 auto 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        button {
            width: 30%;
            height: 40px;
            margin-bottom: 20px;
            color: #000000;
            border: none;
            border-radius: 5px;
        }
    }
    .select {
        background-color: green;
        color: #FFFFFF;
    }
    
`
const BoxContainer = styled.div`
    width: 30%;
    height: 100px;
    border: 1px solid #000000;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 0;
    bottom: 0;
    p {
        font-size: 40px;
    }
    button {
        width: 50%;
        height: 40px;
        margin: auto;
    }
`
