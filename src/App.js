import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "./actions/actionsCart";
import Cart from "./components/Cart/Cart";
import Filter from "./components/Filter/Filter";
import Product from "./components/Products/Products";
import data from "./data.json";

function App() {
  const [dataProduct, setDataProduct] = useState(data.product);
  const [cart, setCart] = useState(
    localStorage.getItem("cart-list")
      ? JSON.parse(localStorage.getItem("cart-list"))
      : []
  );
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  // filter price product
  const priceFilter = (e) => {
    let checkPrice = e.target.value;
    setPrice(checkPrice);
    let newData = [...dataProduct];
    setDataProduct(
      newData.sort((a, b) =>
        checkPrice === "lowest"
          ? a.price > b.price
            ? 1
            : -1
          : checkPrice === "highest"
          ? a.price < b.price
            ? 1
            : -1
          : a.id > b.id
          ? 1
          : -1
      )
    );
  };

  // filter size product
  const sizeFilter = (e) => {
    if (e.target.value === "All") {
      setSize(e.target.value);
      setDataProduct(data.product);
    } else {
      setSize(e.target.value);
      let newData = [...dataProduct];
      setDataProduct(
        newData.filter((item) => item.size.indexOf(e.target.value) >= 0)
      );
    }
  };
  // add product to cart
  const addToCart = (product) => {
    const newCarts = [...cart];
    let alreadyCart = false;
    newCarts.forEach((item) => {
      if (item.id === product.id) {
        item.count++;
        alreadyCart = true;
      }
    });
    if (!alreadyCart) {
      newCarts.push({ ...product, count: 1 });
    }
    setCart(newCarts);

    localStorage.setItem("cart-list", JSON.stringify(newCarts));
    dispatch(addCart(newCarts));
    console.log(localStorage.getItem("cart-list"));
  };

  // remove product from cart
  const removeCart = (product) => {
    const newCarts = cart.filter((item) => item.id !== product.id);
    setCart(newCarts);

    localStorage.setItem("cart-list", JSON.stringify(newCarts));
    dispatch(addCart(newCarts));
  };

  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter
              data={dataProduct}
              size={size}
              price={price}
              sizeFilter={sizeFilter}
              priceFilter={priceFilter}
            />
            <Product data={dataProduct} addToCart={addToCart} />
          </div>
          <div className="sidebar">
            <Cart remove={removeCart} />
          </div>
        </div>
      </main>
      <footer>
        <a href="/"> This App create by React, Redux, NodeJs, MongoDB</a>
      </footer>
    </div>
  );
}

export default App;
