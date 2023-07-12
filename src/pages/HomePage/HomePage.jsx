import { styled } from "styled-components";
import Product from "./Product/Product";


export default function HomePage() {

    return (
        <CsHomePage>
            
            <main>
               <Product/>
               <Product/>
               <Product/>
               <Product/>
               <Product/>
               <Product/>
               <Product/>
               <Product/>
            </main>
        </CsHomePage>
    );

}

const CsHomePage = styled.div`
  border: 3px solid;
  //background-color: red;
  height: auto;
  width: 100hv;
  //internal position
  display: flex;
  flex-direction: column;

    *{
        border: 1px solid;

    }

  main{
    width: 100hv;
    height: auto;
    border: 1px solid;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    //padding: 40px;

  }
`;
