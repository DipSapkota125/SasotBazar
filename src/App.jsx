import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import TopHeader from "./components/topHeader/TopHeader";
import Home from "./pages/home/Home";
import Login from "./pages/user/login/Login";
import PageNotFound from "./pages/notFound/PageNotFound";
import AboutUs from "./pages/aboutUs/AboutUs";
import LearnMore from "./pages/learnMore/LearnMore";
import ProductView from "./pages/product/productView/ProductView";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchedData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`https://fakestoreapi.com/products`);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchedData();
  }, []);
  return (
    <>
      <Router>
        <ToastContainer />
        <TopHeader title="SastoBazar Rewards" />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sastobazar-login" element={<Login />} />
          <Route path="/about-us-details" element={<AboutUs />} />
          <Route path="/more-info" element={<LearnMore />} />
          <Route
            path="/product-view/:id"
            element={<ProductView isLoading={isLoading} products={products} />}
          />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
