import { useNavigate } from "react-router";
import { styled } from "styled-components";

export default function Product( props ) {
    const navigate = useNavigate();
    const {name , images, value, sector, id} = props.prod;

    const displayProduct = (sector, id)=>{
        navigate(`/${sector}/${id}`);
    }

    return (
        <CsProduct>
            <img src={images}  onClick={()=>displayProduct(sector, id)}/>
            <h2  onClick={()=>displayProduct(sector, id)}>{name}</h2>
            <div className="valuesProduct"> R$ {value.toFixed(2)}</div>
            <button className="addCard">Adquira Agora!</button>
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
        cursor: pointer;
    }
    h2{
        overflow-y: hidden;
        max-height: 100px;
        cursor: pointer;
    }
    .valuesProduct{
        margin-top: 3px; 
    }
    .addCard{
        width: 100%;
        height: 35px;
        margin-top: 3px;
    }
`;