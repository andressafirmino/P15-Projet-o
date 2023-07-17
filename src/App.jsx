import { BrowserRouter, Routes, Route } from "react-router-dom"
import { styled } from "styled-components";
import CartPage from "./pages/CartPage/CartPage";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header";
import ProductPage from "./pages/ProductPage/ProductPage";
import { useState } from "react";
import CONTEXT from "./context/context";
import SignInPage from "./pages/SignIn/SignIn";
import SectorPage from "./pages/SectorPage/SectorPage";
import SignUpPage from "./pages/SignUp/SignUp";
import Checkout from "./pages/Checkout/Checkout";

function App() {
  const [user, setUser] = useState({});
  const [total, setTotal] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  if(cartProducts.length > 0) {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }  

  if(user?.length > 0) {
    sessionStorage.setItem("user", JSON.stringify(user));
  }  

  return (
    <PagesContainer>
      <CONTEXT.Provider value={{ currentId: '', user, setUser,
        total, setTotal,
        cartProducts, setCartProducts }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/carrinho" element={<CartPage />} />
            <Route path="/:sector" element={<SectorPage />} />
            <Route path="/:sector/:id" element={<ProductPage />} />
            <Route path="/confirmar-informacao" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CONTEXT.Provider>
    </PagesContainer>
  )
}

export default App;

const PagesContainer = styled.div`
  //border: 1px solid red;
  width: 100hv;
  padding-top: 80px;
  padding: 100px 5% ;
`;
