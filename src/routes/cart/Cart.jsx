import React from "react";
import { useSelector } from "react-redux";
import Header from "../../components/header/Header";
import PopularProducts from "../../components/popularProducts/PopularProducts";
import Footer from "../../components/footer/Footer";
import AddProducts from "../../components/addProducts/AddProducts";
import CartProducts from "../../components/cartProducts/CartProducts";

function Cart() {
  let cartData = useSelector((s) => s.addToCart);

  document.title = "Savat - Uzum";
  return (
    <div className="cart">
      <div>
        <Header />
        {cartData.length ? <CartProducts data={cartData} /> : <AddProducts />}
        <PopularProducts />
        <Footer />
      </div>
    </div>
  );
}

export default Cart;
