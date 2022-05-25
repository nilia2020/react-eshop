import React from "react";
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import "../styles/global.css";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import PasswordRecovery from "../pages/RecoveryPassword";
import SendEmail from "../pages/SendEmail";
import NewPassword from "../pages/NewPassword";
import MyAccount from "../pages/MyAccount";
import CreateAccount from "../pages/CreateAccount";
import Checkout from "../pages/checkout";
import Orders from "../pages/Orders";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="password-recovery" element={<PasswordRecovery />} />
        <Route path="/send-email" element={<SendEmail />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/account" element={<MyAccount />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
