import React from "react";
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import RecoveryPassword from "../containers/RecoveryPassword";
import "../styles/global.css";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" component={<Home />} />
        <Route path="login" component={<Login />} />
        <Route path="recovery-password" component={<RecoveryPassword />} />
      </Routes>
    </Layout>
  );
};

export default App;
