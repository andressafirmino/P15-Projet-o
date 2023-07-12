import { BrowserRouter, Routes, Route } from "react-router-dom"
import { styled } from "styled-components";
import CartPage from "./pages/CartPage/CartPage";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header";

function App() {
  return (
  <PagesContainer>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/carrinho" element={<CartPage />}/>
      </Routes>
    </BrowserRouter>
  </PagesContainer>
  )
}

export default App;

const PagesContainer = styled.div`
  border: 1px solid red;
  width: 100hv;
  padding-top: 80px;
`;
