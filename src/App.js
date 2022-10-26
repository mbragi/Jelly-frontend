import React from "react";
import ProductDetails from "./pages/productDetails/ProductDetails";
import { HashRouter, Routes, Route } from "react-router-dom";
import { path } from "./routes";
import Home from "./pages/home/Home";
import LoginPage from "./pages/login/LoginPage";
import Cart from "./pages/cart/Cart.jsx";
import RegisterPage from "./pages/register/RegisterPage";
import CheckOut from "./pages/checkout/CheckOut";
import ContactPage from "./pages/contact/ContactPage";
import Products from "./pages/products/Products.jsx";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import SpecHead from "./pages/specification/SpecHead";
import VideoSection from "./pages/videoSection/VideoSection";
import Ncm from "./pages/specification/ncm/Ncm";
import Lfp from "./pages/specification/lfp/Lfp";
import UploadImage from "./utils/cloudinary";

import AdminDashboard from './pages/adminDashboard/AdminDashboard';

import AdminCategory from "./pages/adminCategory/AdminCategory";

import AdminUsers from "./pages/adminUsers/AdminUsers";
import AdminProducts from "./pages/adminProducts/AdminProducts";
import AdminAddProduct from "./pages/adminAddProduct/AdminAddProduct";


function App() {
  return (
    <>
      <section style={{ width: "100%" }}>
        <HashRouter>
          <Routes>
          <Route exact path={path.homepage} element={<Home />} />
          <Route exact path={path.loginPage} element={<LoginPage />} />
          <Route exact path={path.registerpage} element={<RegisterPage />} />
          <Route exact path={path.cart} element={<Cart />} />
          
          <Route exact path={path.checkout} element={<CheckOut />} />
          <Route exact path={path.product} element={<Products />} />
          
          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path="/details/:id" element={<ProductDetails />} />
          <Route exact path="/forgotpassword" element={<ForgotPassword />} />
          
          <Route exact path="/admin" element={<AdminDashboard />} />
          <Route exact path="/admin/dashboard" element={<AdminDashboard />} />
            <Route exact path="/admin/categories" element={<AdminCategory />} />
          <Route exact path="/admin/users" element={<AdminUsers />} />
          <Route exact path="/admin/products" element={<AdminProducts />} />
          <Route exact path="/admin/addproduct" element={<AdminAddProduct />} />
         
            <Route exact path="/product" element={<SpecHead />} />
            <Route exact path="/video" element={<VideoSection />} />
            <Route exact path="/product/ncm" element={<Ncm />} />
            <Route exact path="/product/lfp" element={<Lfp />} />
            <Route exact path="/upload" element={<UploadImage />} />

            <Route exact path="*" element={<h1>404</h1>} />
          </Routes>
        </HashRouter>
      </section>
    </>
  );
}
export default App;
