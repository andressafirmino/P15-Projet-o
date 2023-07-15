import { styled } from "styled-components";
import Product from "../HomePage/Product/Product";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";


export default function SectorPage(props) {
  const [allProducts, setAllProducts] = useState('CARREGANDO...');
  const {sector} = useParams();

  useEffect(()=>{
    axios.get(`http://localhost:5000/${sector}`)
    .then((res)=>{
      setAllProducts(res.data);
    })
    .catch((err)=>{
      console.log(err.message)
    })

  }, [sector]);

    if(allProducts === 'CARREGANDO...')return allProducts;
    return(
        <CsHomePage>
            
            <main>
               {allProducts.map((prod, index) => <Product prod={prod} key = {index }/>)}               
            </main>
        </CsHomePage>
    );

}

const CsHomePage = styled.div`
  //border: 3px solid;
  //background-color: red;
  height: auto;
  width: 100hv;
  //internal position
  display: flex;
  flex-direction: column;

  main{
    width: 100hv;
    height: auto;
    //border: 1px solid;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    //padding: 40px;
  }
`;