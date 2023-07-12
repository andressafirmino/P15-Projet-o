import { styled } from "styled-components";

export default function HomePage() {

    return (
        <CsHomePage>
            <header></header>
            <main>adsf</main>
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



  header{
    width: 100%;
    height: 40px;
    background-color: blue;
  }
  main{
    width: 100%;
    height: auto;
    border: 1px solid;

  }
`;
