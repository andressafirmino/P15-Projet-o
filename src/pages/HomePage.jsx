import { styled } from "styled-components";

export default function HomePage() {

    return (
        <CsHomePage>
            <header>
                <div className="logo">LOGO</div>
                <div className="sectors">SALA COZINHA ESCRITÓRIO</div>
                <div className="interaction"></div>
            </header>
            <main>
                <div className="product"></div>
                <div className="product"></div>
                <div className="product"></div>
                <div className="product"></div>
                <div className="product"></div>
                <div className="product"></div>
                <div className="product"></div>
                <div className="product"></div>

            </main>
        </CsHomePage>
    );

}

const CsHomePage = styled.div`
  border: 3px solid;
  //background-color: red;
  height: auto;
  width: 100%;
  //internal position
  display: flex;
  flex-direction: column;

    *{
        border: 1px solid;

    }

  header{
    width: 100%;
    height: 80px;
    background-color: blue;
    display: flex;
    justify-content: space-between;

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
  }

  main{
    width: 100%;
    height: auto;
    border: 1px solid;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 30px;

    .product{
        width: 200px;
        height: 300px;
        margin: 10px;

    }

  }
`;
