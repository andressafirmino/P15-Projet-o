import { styled } from "styled-components";
import CONTEXT from "../context/context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


export default function Footer() {

    const {total, user} = useContext(CONTEXT);
    const navigate = useNavigate();

    function checkLogin() {
        navigate("/confirmar-informacao");
    }

    return (
        <FooterContainer>
            <p>Total R${total.toLocaleString("pt-BR")}</p>
            <button onClick={checkLogin}><p>Continuar</p></button>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    width: 100%;
    height: 100px;
    background-color: #73384E;
    border: 1px solid #000000;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 40px;
    position: fixed;
    left: 0;
    bottom: 0;
    p {
        font-size: 25px;
        font-weight: 700;
        color: #FFFFFF;
    }
    button {
        width: 200px;
        height: 80px;
        background-color: green;
        border: none;
        border-radius: 10px;
        margin-left: 40px;
        p {
            font-size: 18px;
            font-weight: 400;
            color: #FFFFFF;
        }
    }
`

