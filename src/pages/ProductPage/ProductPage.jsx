import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import CONTEXT from "../../context/context";
import Footer from "../../components/Footer";

export default function ProductPage(props) {
    const { id } = useParams();
    const [currentProd, setCurrenteProd] = useState('carregando...');
    const { images, name, description, value, discount } = currentProd;
    const [mainImage, setMainImage] = useState(0);
    const anchoring = (value / (1 - discount / 100)).toFixed(2);
    const { cartProducts, setCartProducts, setTotal } = useContext(CONTEXT);
    const [isSelect, setIsSelect] = useState(false);


    function addProduct() {
        let newArray = [...cartProducts, {
            name, images, value, id
        }];
        setCartProducts(newArray);
        setIsSelect(true);
        setTotal((prevTotal) => prevTotal + parseFloat(value));
    }

    function rmProduct(id) {
        const newArray = [...cartProducts];
        let position = newArray.findIndex(item => item.id === id);
        let remove = newArray.splice(position, 1);
        setCartProducts(newArray);
        setIsSelect(false);
        setTotal((prevTotal) => prevTotal - parseFloat(value));
    }

    useEffect(() => {
        axios.post(`${import.meta.env.VITE_API_URL}singleProduct`, { id })
            .then((res) => {
                //console.log('este é o single product',res.data)
                setCurrenteProd(res.data);
            })
            .catch(erro => console.log(erro))

    }, []);



    if (currentProd === 'carregando...') return currentProd;
    return (
        <CsProductPage>
            <main>
                <div className="imagesProduct">
                    <div className="containerSmallImgs">
                        {images.map((img, idx) => <img src={img} key={idx} onClick={() => setMainImage(idx)} />)}
                    </div>
                    <img src={images[mainImage]} className="bigImg" />
                </div>
                <div className="lookAndAct ">
                    <h2>{name}</h2>
                    <div className="values">
                        {Number(discount) > 0 && <div className="before">de R$ {anchoring}</div>}
                        <div className="after">por R$ {value.toFixed(2)}</div>
                    </div>
                    {isSelect ? (
                        <button className="addCard select" onClick={() => rmProduct(id)}>Adicionado ao carrinho!</button>
                    ) : (
                        <button className="addCard" onClick={addProduct}>Adquira Agora!</button>
                    )}
                </div>
            </main>
            <div className="description">
                <h1>DESCRIÇÃO</h1>
                <div className="descriptionText">{description}</div>
            </div>
            {cartProducts.length > 0 && (
              <Footer/>
            )}
        </CsProductPage>
    );
}

const CsProductPage = styled.div`
    width: 100%;
    //border: 1px solid;
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    
    main{
        height: 500px;
        width: 100%;
        //border: 1px solid;
        display: flex;

        .imagesProduct{
            width: 50%;
            height: 100%;
            //border: 1px solid;
            display: flex;

            .containerSmallImgs{
                height: 100%;
                width: 20%;
                img{
                    height: 20%;
                    border: 4px solid #73384E;               
                    border-radius: 50%;
                    width: 100%;
                    cursor: pointer;
                    &:hover{
                        transform: scale(1.05);
  
                    }
                }
            }
            .bigImg{
                //border: 1px solid;
                height: 100%;
                width: 80%;
                border-radius: 12px;
            }
        }
        .lookAndAct{
            width: 50%;
            height: 100%;
            //border: 1px solid;
            padding: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;

            .select {
                background-color: #10af1e;
            }

            h2{
                font-size: 38px;
            }

            .values{
                .before{
                    text-decoration: line-through;
                }
                .after{
                    font-size: 30px;
                }
            }

            button{
                width: 90%;
                height: 50px;
                border: none;
                border-radius: 12px;
                background-color: #73384E;
                color: white;
                cursor: pointer;

            }
        }
    }

    .description{
        flex-direction: column;
        text-align: center;
        //border: 1px solid pink;
        width: 80%;

        h1{
            font-size: 50px;
        }
        .descriptionText{
            border: 1px solid;
        }

    }
    
`;