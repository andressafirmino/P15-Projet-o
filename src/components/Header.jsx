import { styled } from "styled-components";

export default function Header() {
    return (
        <CsHeader>
            <div className="containerLogoIteraction">
                <div className="logo">LOGO</div>
                <div className="interaction"></div>
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
        }
        .interaction{
            height: 100%;
            width: 47%;
            border: 1px solid;
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