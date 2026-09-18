import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/layout/Navbar/NavBar";

import Home from "./Pages/Home";
import Trending from "./Pages/Trending";
import Discover from "./Pages/Discover";
import Clothing from "./Pages/Clothing";
import Electronics from "./Pages/Electronics";

import Footer from "./Components/layout/Footer/Footer";

import Cart from "./Pages/Cart";
import CartProvider from "./Components/Context/cartContext";
import AuthProvider from "./Components/Context/AuthContext";
import { ModalProvider } from "./Components/Context/ModalContext";

import NotFound from "../src/Pages/404/NotFound";
import Checkout from "./Pages/Checkout";

import ScrollToTop from "./Components/CustomHooks/scrollToTop";
import Login_Options_Modal from "./Pages/Admin/Login/LoginOptionsModal";
import CartProtectedRoute from "./Components/ProtectedRoutes/cartProtectedRoute";

import DashBoardProtectedRoute from "./Components/ProtectedRoutes/dashboardProtectedRoute";

import Dashboard from "./Pages/Admin/Dashboard/Dashboard";
import DashboardOverview from "./Pages/Admin/Dashboard/DashboardOverview";
import DashboardUsers from "./Pages/Admin/Dashboard/DashboardUsers";

import DashboardAddProduct from "./Pages/Admin/Dashboard/DashboardAddProduct";
import DashboardManageProducts from "./Pages/Admin/Dashboard/DashboardManageProducts";
import DashboardEditProduct from "./Pages/Admin/Dashboard/DashboardEditProduct";

function App() {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <ModalProvider>
            <BrowserRouter>
              <ScrollToTop />
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Trending" element={<Trending />} />
                <Route path="/Electronics" element={<Electronics />} />
                <Route path="/Discover" element={<Discover />} />
                <Route path="/Clothing" element={<Clothing />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/Checkout" element={<Checkout />} />
                <Route
                  path="/Cart"
                  element={
                    <CartProtectedRoute>
                      <Cart />
                    </CartProtectedRoute>
                  }
                />
                <Route
                  path="/Dashboard"
                  element={
                    <DashBoardProtectedRoute>
                      <Dashboard />
                    </DashBoardProtectedRoute>
                  }
                >
                  <Route index element={<DashboardOverview />} />
                  <Route path="Users" element={<DashboardUsers />} />
                  <Route
                    path="Products/Add"
                    element={<DashboardAddProduct />}
                  />

                  <Route
                    path="Products/Manage"
                    element={<DashboardManageProducts />}
                  />
                  <Route
                    path="Products/Edit/:productId"
                    element={<DashboardEditProduct />}
                  />
                </Route>
              </Routes>
              <Login_Options_Modal />
              <Footer />
            </BrowserRouter>
          </ModalProvider>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
