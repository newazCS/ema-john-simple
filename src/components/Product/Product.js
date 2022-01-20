import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import "./Product.css";

const Product = (props) => {
  return (
    <div className="product">
      <div>
        <img src={props.product.img} alt="" />
      </div>
      <div>
        <h3 className="product-name">{props.product.name} </h3>
        <br />
        <p>
          <small>By:{props.product.seller}</small>
        </p>
        <p>${props.product.price}</p>
        <p>
          <small>Only {props.product.stock} left in stock - order soon</small>
        </p>
        <button className="main-button" onClick={() =>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
