import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CartList from "./components/CartList";
import productItems from "./products";
import { useState } from "react";

function App() {
  const [product, setProduct] = useState(productItems);

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  const handleShow = (value) => {
    setShowCart(value);
  };

  return (
    <div>
      <Header count={cart.length} handleShow={handleShow}></Header>

      {showCart ? (
        <CartList cart={cart}></CartList>
      ) : (
        <ProductList product={product} addToCart={addToCart}></ProductList>
      )}
    </div>
  );
}

export default App;
