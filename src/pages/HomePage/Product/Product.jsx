import { styled } from "styled-components";



export default function Product() {
    return (
        <CsProduct>
            <img src="https://www.taqi.com.br/ccstore/v1/images/?source=/file/v6154013894709614152/products/9999254019721.00-cafeteira-chaleira-eletrica-cadence-preta-110v.jpg&height=470&width=470&height=470&width=470&quality=0.8" />
            <h2>CAFETEIRA DA BOA</h2>
            <div className="valuesProduct"> R$ 229,00</div>
            <button className="addCard">Adiconar ao carrinho</button>
        </CsProduct>
    );
}

const CsProduct = styled.div`
    width: 200px;
    height: 300px;
    margin: 20px;
    padding: 10px;

    display: flex;
    flex-direction: column;

    img{
        width: 100%;
    }
    .valuesProduct{
        margin-top: 5px; 
    }
    .addCard{
        width: 100%;
        height: 35px;
        margin-top: 15px;
    }
`;