import React from "react";

export default function Filter(props) {
  const { data, size, price, sizeFilter, priceFilter } = props;

  return (
    <div className="product-filter">
      <div className="filter-count">{data.length} Products</div>
      <div className="filter-price">
        Price{" "}
        <select value={price} onChange={priceFilter}>
          <option value="latest">Latest</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>

      <div className="filter-size">
        Size{" "}
        <select value={size} onChange={sizeFilter}>
          <option value="All">All</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
    </div>
  );
}
