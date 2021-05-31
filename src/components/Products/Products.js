import React from "react";

export default function Products(props) {
  const { data, addToCart } = props;
  return (
    <div>
      <ul className="products">
        {data.map((product) => (
          <li key={product.id} className="product-item">
            <div className="product-image">
              <img src={product.image} alt={product.title}></img>
            </div>
            <div className="product-name">{product.title}</div>
            <div className="product-group">
              <div className="product-price">${product.price}</div>
              <div className="product-button">
                <button onClick={() => addToCart(product)}>ADD TO CART</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
