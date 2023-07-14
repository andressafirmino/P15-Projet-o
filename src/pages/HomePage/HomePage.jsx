import { styled } from "styled-components";
import Product from "./Product/Product";
import DATAPRODUCTS from "../../DATA";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import CONTEXT from "../../context/context";
import Footer from "../../components/Footer";


export default function HomePage(props) {
  const [allProducts, setAllProducts] = useState('CARREGANDO...');
  const {cartProducts} = useContext(CONTEXT);

  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}`)
    .then((res)=>{
      console.log(res.data)
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
            {cartProducts.length > 0 && (
              <Footer/>
            )}
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
