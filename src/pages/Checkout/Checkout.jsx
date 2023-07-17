import { useContext, useState } from "react";
import { styled } from "styled-components";
import CONTEXT from "../../context/context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Checkout() {

    const { total, user } = useContext(CONTEXT);
    const [pay, setPay] = useState("");
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [address, setAddress] = useState('');
    const [complement, setComplement] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [sucess, setSucess] = useState(false);
    const navigate = useNavigate();

    function buy(e) {
        e.preventDefault();
        const url = `${import.meta.env.VITE_API_URL}confirmar-informacao`;
        const info = {
            name, email, state, city, neighborhood, address, complement, pay
        };
        axios.post(url, info)
            .then(() => {
                setSucess(true)
            })
            .catch(e => {
                console.log(e.response.data.message);
            })
    }

    return (
        <>
            {sucess && (
                <Sucess>
                    <div>
                        Compra realizada com sucesso!
                        <button onClick={() => {
                            setSucess(false);
                            navigate("/");
                        }}>OK</button>
                    </div>
                </Sucess>
            )}
            <CheckoutContainer>
                <CheckBox onSubmit={buy}>
                    <p>
                        Confira seus dados:
                    </p>
                    <InputStyled placeholder="Nome" type="text" required value={name} onChange={(e) => setName(e.target.value)} disabled={disabled}></InputStyled>
                    <InputStyled placeholder="E-mail" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} disabled={disabled}></InputStyled>
                    <InputStyled placeholder="Estado" type="text" required value={state} onChange={(e) => setState(e.target.value)} disabled={disabled}></InputStyled>
                    <InputStyled placeholder="Cidade" type="text" required value={city} onChange={(e) => setCity(e.target.value)} disabled={disabled}></InputStyled>
                    <InputStyled placeholder="Bairro" type="text" required value={neighborhood} onChange={(e) => setNeighborhood(e.target.value)} disabled={disabled}></InputStyled>
                    <InputStyled placeholder="Endereço" type="text" required value={address} onChange={(e) => setAddress(e.target.value)} disabled={disabled}></InputStyled>
                    <InputStyled placeholder="Complemento" type="text" required value={complement} onChange={(e) => setComplement(e.target.value)} disabled={disabled}></InputStyled>
                    <span>Método de pagamento:</span>
                    <DivStyled>
                        <button type="button" onClick={() => setPay("Pix")} className={pay === "Pix" ? 'select' : ''}>Pix</button>
                        <button type="button" onClick={() => setPay("Cartão")} className={pay === "Cartão" ? 'select' : ''}>Cartão</button>
                        <button type="button" onClick={() => setPay("Boleto")} className={pay === "Boleto" ? 'select' : ''}>Boleto</button>
                    </DivStyled>
                    <BoxContainer>
                        <span style={{ fontSize: '27px' }} >Pagamento total: R${total.toLocaleString("pt-BR")}</span>
                        <button type="submit">Finalizar comprar</button>
                    </BoxContainer>
                </CheckBox>
            </CheckoutContainer>
        </>
    )
}

const CheckoutContainer = styled.div`
    width: 100%;
    height: 100%;
`

const CheckBox = styled.form`
    width: 100%;
    border-radius: 5px;
    border: 3px solid #73384E;
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
    
    span {
        font-size: 15px;
        margin-bottom: 10px;
        margin-left: 10px;
    }
    
    .select {
        background-color: #10af1e;
        color: #FFFFFF;
    }
    
`
const DivStyled = styled.div`
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
`
const InputStyled = styled.input`
        height: 50px;
        margin-bottom: 10px;
        padding: 10px;
        font-size: 20px;
        border-radius: 5px;
`
const BoxContainer = styled.div`
    width: 30%;
    height: 100px;
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
        width: 70%;
        height: 43px;
        margin: auto;
        background-color: #10af1e;
        color: #FFFFFF;
        border: none;
        border-radius: 10px;
    }
`
const Sucess = styled.div`
     width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
    background-color: rgba(255,255,255, 0.7);
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
        justify-content: center;
        align-items: center;
        padding: 10px; 
        button {
            background-color: #FFFFFF;
            border: none;
            border-radius: 3px;
            margin-top: 20px;
        }      
    }
    
`