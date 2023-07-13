import { styled } from "styled-components";
import cart from './../assets/cart-outline.svg'
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    return (
        <CsHeader>
            <div className="containerLogoIteraction">
                <div className="logo"  onClick={()=>navigate('/')}>LOGO</div>
                <div className="interaction">
                    <div className="carrinho" onClick={()=>navigate('/carrinho')}>
                        <div className="carrinhoImg"><img src={cart} alt="carrinho" /></div>                        
                        <p>CARRINHO</p>
                    </div>
                    <div className="signInUp">LOGIN/CADASTRO</div>
                </div>
            </div>
            <div className="sectors">
                <p>jantar</p>
                <p>reunião</p>
                <p>jardim</p>
                <p>infantil</p>
            </div>

        </CsHeader>
    );
}

const CsHeader = styled.div`
    width: 100%;
    height: 100px;
    background-color: blue;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    //padding: 0 5%;

    .containerLogoIteraction{
        margin: 0 5%;
        display: flex;
        height: 70%;
        //flex-direction: column;
        justify-content: space-between;

        .logo{
            height: 100%;
            width: 200px;
            font-size: 50px;
            cursor: pointer;
        }
        .interaction{
            height: 100%;
            width: 30%;
            border: 1px solid;

            display: flex;
            justify-content: space-between;
            align-items: center;



            .carrinho{
                display: flex;
                align-items: center;
                background-color: white;
                border: 1px solid;
                width: auto;
                border-radius: 12px;
                padding: 0 10px;
                cursor: pointer;
                .carrinhoImg{
                    height: 50px;
                    width: 50px;
                    color: green;
                }
            }

            .signInUp{

            }
        }

    }

    
    .sectors{
        padding: 0 15%;
        height: 30%;
        width: 100%;
        font-size: 10px;
        background-color: black;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 20px;

        p{
            border: 2px solid white
        }
    }
   
`;