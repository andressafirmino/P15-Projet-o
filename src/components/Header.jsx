import { styled } from "styled-components";



export default function Header(){
    return(
        <CsHeader>
            <div className="logo">LOGO</div>
            <div className="sectors">SALA COZINHA ESCRITÓRIO</div>
            <div className="interaction"></div>
        </CsHeader>
    );
}

const CsHeader = styled.div`
    width: 100%;
    height: 80px;
    background-color: blue;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    padding: 0 40px;

    .logo{
        height: 100%;
        width: 200px;
        font-size: 50px;
    }
    .sectors{
        height: 100%;
        width: 500px;
        font-size: 30px;

    }
    .interaction{
        height: 100%;
        width: 300px;
    }

`;