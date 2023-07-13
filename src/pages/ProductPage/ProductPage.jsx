import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import DATAPRODUCTS from "../../DATA";
import { useState } from "react";

export default function ProductPage(props) {
    const {sector, id} = useParams();
    const currentProd = DATAPRODUCTS[id -1];
    const { images, name, description, value, discount } = currentProd;
    const [mainImage, setMainImage] = useState(0);
    const anchoring = (value/(1-discount/100)).toFixed(2);

    return (
        <CsProductPage>
            <main>
                <div className="imagesProduct">
                    <div className="containerSmallImgs">
                        {images.map((img, idx ) =><img src={img} onClick={()=>setMainImage(idx)}/>)}                        
                    </div>
                    <img src={images[mainImage]} className="bigImg"/>
                </div>
                <div className="lookAndAct ">
                    <h2>{name}</h2>
                    <div className="values">
                        {Number(discount ) > 0 && <div className="before">de R$ {anchoring}</div>}
                        <div className="after">por R$ {value}</div>
                    </div>
                    <button>ADQUIRA AGORA!</button>
                </div>
            </main>
            <div className="description">
                <h1>DESCRIÇÃO</h1>
                <div className="descriptionText">{description}</div>
            </div>
        </CsProductPage>
    );
}

const CsProductPage = styled.div`
    width: 100%;
    border: 1px solid;
    display:flex;
    flex-direction: column;
    align-items: center;
    
    main{
        height: 500px;
        width: 100%;
        border: 1px solid;
        display: flex;

        .imagesProduct{
            width: 50%;
            height: 100%;
            border: 1px solid;
            display: flex;

            .containerSmallImgs{
                height: 100%;
                width: 20%;
                border: 1px solid;
                img{
                    height: 20%;
                    border: 1px solid;
                    width: 100%;
                    cursor: pointer;
                }
            }
            .bigImg{
                border: 1px solid;
                height: 100%;
                width: 80%;
            }
        }
        .lookAndAct{
            width: 50%;
            height: 100%;
            border: 1px solid;
            padding: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;

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
            }
        }
    }

    .description{
        flex-direction: column;
        text-align: center;
        border: 1px solid pink;
        width: 80%;

        h1{
            font-size: 50px;
        }
        .descriptionText{
            border: 1px solid;
        }

    }
    
`;