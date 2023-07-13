import { BrowserRouter, Routes, Route } from "react-router-dom"
import { styled } from "styled-components";
import CartPage from "./pages/CartPage/CartPage";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header";
import ProductPage from "./pages/ProductPage/ProductPage";
import { useState } from "react";
import DATAPRODUCTS from "./DATA";
import CONTEXT from "./context/context";
import SignInPage from "./pages/SignIn/SignIn";

function App() {
  const [allProd, setAllProd] = useState(DATAPRODUCTS);
  const [user, setUser] = useState()

  return (
  <PagesContainer>
    <CONTEXT.Provider value={{currentId: '', user, setUser}}>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage allProd={allProd}/>} />
        <Route path="/sign-in" element={<SignInPage />}/>
        <Route path="/carrinho" element={<CartPage />}/>
        <Route path="/:sector/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
    </CONTEXT.Provider>
  </PagesContainer>
  )
}

export default App;

const PagesContainer = styled.div`
  border: 1px solid red;
  width: 100hv;
  padding-top: 80px;
  padding: 100px 5% 0;
`;
