import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { path } from "./routes";
import Home from "./pages/home/Home";
import LoginPage from "../src/pages/login/LoginPage";
import RegisterPage from "../src/pages/register/RegisterPage";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <>
      <section style={{ width: "100%" }}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/register" element={<RegisterPage />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
           
      </section>
      {/* <Home  /> */}
    </>
  );
}

export default App;
