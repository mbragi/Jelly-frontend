import { HashRouter, Routes, Route } from "react-router-dom";
import { path } from "./routes";
import React from "react";
import PrivateRoutes from "./utils/PrivateRoutes";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart.jsx";
import CheckOut from "./pages/checkout/CheckOut";
import ContactPage from "./pages/contact/ContactPage";
import Products from "./pages/products/Products.jsx";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import SpecHead from "./pages/specification/SpecHead";
import VideoSection from "./pages/videoSection/VideoSection";
import Ncm from "./pages/specification/ncm/Ncm";
import Lfp from "./pages/specification/lfp/Lfp";
import UploadImage from "./utils/cloudinary";
import AdminDashboard from "./pages/adminDashboard/AdminDashboard";
import AdminCategory from "./pages/adminCategory/AdminCategory";
import AdminUsers from "./pages/adminUsers/AdminUsers";
import AdminProducts from "./pages/adminProducts/AdminProducts";
import AdminAddProduct from "./pages/adminAddProduct/AdminAddProduct";
import AdminSectionI from "./pages/adminsectionI/AdminSectionI";
// import AdminSectionII from "./pages/adminsectionII/AdminSectionII";
// import AdminSectionIIb from "./pages/adminsectionII/AdminSectionIIb";
import AdminSectionIIc from "./pages/adminsectionII/AdminSectionIIc";
import AdminSectionIII from "./pages/adminsectionIII/AdminSectionIII";
import AdminSectionIV from "./pages/adminsectionIV/AdminSectionIV";
// import Welcome from "./components/welcome/Welcome";

function App() {
  return (
    <>
      <section style={{ width: "100%" }}>
        <HashRouter>
          <Routes>
            <Route exact path={path.homepage} element={<Home />} />
            <Route exact path={path.cart} element={<Cart />} />

            <Route exact path={path.checkout} element={<CheckOut />} />
            <Route exact path={path.product} element={<Products />} />

            <Route exact path="/contact" element={<ContactPage />} />
            <Route exact path="/details/:id" element={<ProductDetails />} />
            <Route exact path="/forgotpassword" element={<ForgotPassword />} />

            <Route path="/admin" element={<PrivateRoutes />}>
              <Route path="/admin" element={<AdminDashboard />} />
            </Route>
            <Route path="/admin/dashboard" element={<PrivateRoutes />}>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
            </Route>
            <Route path="/admin/categories" element={<PrivateRoutes />}>
              <Route
                exact
                path="/admin/categories"
                element={<AdminCategory />}
              />
            </Route>
            <Route path="/admin/users" element={<PrivateRoutes />}>
              <Route exact path="/admin/users" element={<AdminUsers />} />
            </Route>
            {/* <Route path="/admin/products" element={<PrivateRoutes />}> */}
            <Route exact path="/admin/products" element={<AdminProducts />} />
            {/* </Route> */}
            {/* <Route path="/admin/addproduct" element={<PrivateRoutes />}> */}
            <Route
              exact
              path="/admin/addproduct"
              element={<AdminAddProduct />}
            />
            {/* </Route> */}
            {/* <Route path='/admin/addcontent' element = {<PrivateRoutes/>}>
              <Route exact path="/admin/addcontent" element={<AdminAddContent />} />
            </Route> */}
            <Route exact path="/admin/sectionI" element={<AdminSectionI />} />
            {/* <Route exact path="/admin/sectionII" element=            {<AdminSectionII />} />
            <Route exact path="/admin/sectionIIb" element={<AdminSectionIIb />} /> */}
            <Route
              exact
              path="/admin/sectionIIc"
              element={<AdminSectionIIc />}
            />
            <Route
              exact
              path="admin/sectionIII"
              element={<AdminSectionIII />}
            />
            <Route exact path="/admin/sectionIV" element={<AdminSectionIV />} />
            {/* <Route exact path="/welcome" element={<Welcome />} /> */}

            <Route exact path="/product" element={<SpecHead />} />
            <Route exact path="/video" element={<VideoSection />} />
            <Route exact path="/product/ncm" element={<Ncm />} />
            <Route exact path="/product/lfp" element={<Lfp />} />
            <Route exact path="/upload" element={<UploadImage />} />
            <Route exact path="/*" element={<h1>404</h1>} />
          </Routes>
        </HashRouter>
      </section>
    </>
  );
}
export default App;
