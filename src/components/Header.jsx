import { styled } from "styled-components";
import logo from '../../public/WS.png' 
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    return (
        <CsHeader>
            <div className="containerLogoIteraction">
                <div className="logo"  onClick={()=>navigate('/')}>
                    <img src={logo} />
                    <><h2>WALET STORE</h2></>
                </div>
                <div className="interaction">
                    <div className="carrinho" onClick={()=>navigate('/carrinho')}>
                    <ion-icon name="cart-outline"></ion-icon>
                        <p>CARRINHO</p>
                    </div>
                    <div className="signInUp"  onClick={()=>navigate('/sign-in')}>LOGIN/CADASTRO</div>
                </div>
            </div>
            <div className="sectors">
                <p onClick={()=>navigate('/')}>HOME</p>
                <p onClick={()=>{navigate('/jantar');}}>JANTAR</p>
                <p onClick={()=>{navigate('/reuniao');}}>REUNIÃO</p>
                <p onClick={()=>{navigate('/jardim');}}>JARDIM</p>
                <p onClick={()=>{navigate('/infantil'); }}>INFANTIL</p>
            </div>

        </CsHeader>
    );
}

const CsHeader = styled.div`
    width: 100%;
    height: 100px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.3);
    //padding: 0 5%;
    

    .containerLogoIteraction{
        margin: 0 5%;
        display: flex;
        height: 70%;
        //flex-direction: column;
        justify-content: space-between;
        align-items: center;


        .logo{
            display:flex;
            align-items:center;
            height: 65px;
            width: 65px;
            font-size: 25px;
            cursor: pointer;

            img{
                width: 100%;
                height: 100%;
                

            }
        }
        .interaction{
            height: 100%;
            width: 30%;
            //border: 1px solid;

            display: flex;
            justify-content: space-between;
            align-items: center;



            .carrinho{
                display: flex;
                align-items: center;
                background-color: #10af1e;
                border: 1px solid;
                width: auto;
                border-radius: 12px;
                padding: 0 10px;
                cursor: pointer;
                color: white;
                ion-icon{
                    height: 40px;
                    width: 50px;
                   
                }
            }

            .signInUp{
                border: 1px solid  #73384E;
                height: 40px;
                display: flex;
                align-items: center;
                padding: 0 10px;
                border-radius: 12px;
                color: #73384E;
                cursor: pointer;
            }
        }

    }

    
    .sectors{
        padding: 0 15%;
        height: 30%;
        width: 100%;
        font-size: 10px;
        background-color: #73384E;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 20px;

        p{
            border: 2px solid white;
            cursor: pointer;
        }
    }
   
`;