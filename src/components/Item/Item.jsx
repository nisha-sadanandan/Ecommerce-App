import React from "react";
import "./Item.css";

const Item = ({ image, name, color, new_price, old_price }) => {
  return (
    <div className="item">
      <div className="image">
        <img src={image} alt="mobile" />
      </div>
      <div className="description">
      <div className="name">
        <p>{name}</p>
      </div>
      <div className="color">
        <p>color : {color}</p>
      </div>
      <div className="prices">
        <div className="new-prices">{new_price}</div>
        <div className="old-prices">M.R.P {old_price}</div>
      </div>
        <button className="add-to-cart">Add To Cart</button>
      </div>
    </div>
  );
};

export default Item;
