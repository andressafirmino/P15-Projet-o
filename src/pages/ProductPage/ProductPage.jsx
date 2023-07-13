import { styled } from "styled-components";
import CONTEXT from "../../context/context";
import { useContext } from "react";

export default function ProductPage(props) {
    let {currentId} = useContext(CONTEXT);
    console.log('estou na product e page e o id atual é ',currentId);

    const {allProd} = props;
    console.log(   'testando a props vindo da app', allProd);
    //const currentProd = allProd[currentId -1];
    //console.log(currentProd);
    // {images, description, name , value, discount, sector } = currentProd;


    return (
        <CsProductPage>
            <main>
                <div className="imagesProduct">
                    <div className="containerSmallImgs">
                        {/* {images.map(img =><img src={img} />)} */}
                        
                    </div>
                    <img src="https://www.taqi.com.br/ccstore/v1/images/?source=/file/v6154013894709614152/products/9999254019721.00-cafeteira-chaleira-eletrica-cadence-preta-110v.jpg&height=500&width=500&quality=0.9"  className="bigImg"/>
                </div>
                <div className="lookAndAct ">
                    <h2>CAFETEIRA DA BOA</h2>
                    <div className="values">
                        <div className="before">de R$ 500,00</div>
                        <div className="after">por R$ 399,90</div>
                    </div>
                    <button>ADQUIRA AGORA!</button>
                </div>
            </main>
            <div className="description">
                <h1>DESCRIÇÃO</h1>
                <div className="descriptionText">asdfasdfasdfasd asdfasfadfasdfas asddfasdfasdfasf asdfasdfasdfasdf asdfasfdasdfasdf asdffasdfasdfsa  asdfasdfasfda dsfasfdasdfasd asdfasdfasdfa çlaskdjfçlakjsdfçakjsdçfkajsdslfkajsdçlfkjasçdkfjaçsdkjfaçskdjfçaksdjf</div>
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
                font-size: 50px;
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