import { styled } from "styled-components";
import Product from "./Product/Product";
import DATAPRODUCTS from "../../DATA";
import axios from "axios";
import { useEffect, useState } from "react";


export default function HomePage(props) {
  const [allProducts, setAllProducts] = useState('CARREGANDO...');

  useEffect(()=>{
    axios.get('http://localhost:5000/')
    .then((res)=>{
      setAllProducts(res.data);
    })
    .catch((err)=>{
      console.log(err.message)
    })

  }, []);

    if(allProducts === 'CARREGANDO...')return allProducts;
    return(
        <CsHomePage>
            
            <main>
               {allProducts.map((prod, index) => <Product prod={prod} id = {index +1 }/>)}               
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
