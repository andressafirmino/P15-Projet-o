import { useNavigate } from "react-router";
import { styled } from "styled-components";
import CONTEXT from "../../../context/context";
import { useContext } from "react";



export default function Product( props ) {
    const navigate = useNavigate();
    let {currentId} = useContext(CONTEXT);
    const {name , images, description, value, sector} = props.prod;
    const {id } = props;


    
    


    const displayProduct = (sector, id)=>{
        currentId = id;
        console.log('CLIQUEI! e esse é o id atual', currentId);
        navigate(`/${sector}/${id}`);
    }

    return (
        <CsProduct>
            <img src={images[0]}  onClick={()=>displayProduct(sector, id)}/>
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