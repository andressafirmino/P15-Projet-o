import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import { styled } from "styled-components";


function App() {
  return (
  <PagesContainer>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  </PagesContainer>
  )
}

export default App;

const PagesContainer = styled.div`
  border: 1px solid red;
`;
