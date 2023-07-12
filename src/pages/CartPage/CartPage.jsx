import { styled } from "styled-components";

export default function CartPage() {

    const cartItem = [
        {
            name: "mesa",
            image: "https://www.larshopping.com.br/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/w/h/whatsapp_image_2022-03-30_at_11.40.16_1_.jpeg",
            value: "R$ 3.000,00",
            description: "Mesa com 6 lugares"
        }
    ]


    return (
        <CartContainer>
            <header>
                <div className="logo">LOGO</div>
                <div className="sectors">SALA COZINHA ESCRITÓRIO</div>
                <div className="interaction"></div>
            </header>
            <body>
                <ItemList>
                    <img />
                </ItemList>
            </body>
        </CartContainer>
    )
}

const CartContainer = styled.div `
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    header{
    width: 100hv;
    height: 80px;
    background-color: blue;
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;

    .logo{
        height: 100%;
        width: 200px;
        font-size: 50px;
    }
    .sectors{
        height: 100%;
        width: 500px;
        font-size: 30px;

    }
    .interaction{
        height: 100%;
        width: 300px;
    }
  }
`

const ItemList = styled.div `
    width: calc(100vw - 40px);
    height: 80px;
    border: 1px solid #000000;
    border-radius: 5px;
    padding: 10px;

    img {
        width: 60px;
        height: 60px;
        border: 1px solid #000000;
        border-radius: 5px;
    }
`
