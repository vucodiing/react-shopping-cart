import React from "react";
import { useSelector } from "react-redux";

export default function Cart(props) {
  const { remove } = props;

  const cartItem = useSelector((state) => state.cart.info);
  console.log(cartItem);

  return (
    <div>
      {cartItem.length === 0 ? (
        <div className="cart-number">The cart is empty</div>
      ) : (
        <div className="cart-number">
          You have {cartItem.length} products in cart
        </div>
      )}
      <ul>
        {cartItem.map((item) => (
          <li key={item.id} className="cart-item">
            {" "}
            <div className="cart-title">
              <div className="cart-image">
                {" "}
                <img src={item.image} alt={item.title}></img>
              </div>
              <div className="cart-group">
                <div className="cart-name">{item.title}</div>
                <div className="cart-price">
                  ${item.price} x {item.count}
                </div>
                <button className="cart-remove" onClick={() => remove(item)}>
                  Remove
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {cartItem.length !== 0 && (
        <div className="cart-order">
          <div className="cart-order-price">
            Total: ${cartItem.reduce((a, c) => a + c.price * c.count, 0)}
          </div>
          <button>PROCESS</button>
        </div>
      )}
    </div>
  );
}
