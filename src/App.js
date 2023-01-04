import React from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import ProductsSlider from "./components/ProductsSlider";
import CartButton from "./components/CartButton";


function App() {
  return (
    <>
    <main className="main-wrapper">
     <Header />
     <Intro />
     <ProductsSlider />
     <CartButton />
    </main>
    </>
  );
}

export default App;
