import React from "react";
import Item from "./Item/Item";
import Shopping from "./product/shopping";

const Newarrivals = () => {
  return (
    <div>
      <h1 className="shop">New Arrivals</h1>
      <div className="popular-shop">
        {Shopping.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              color={item.color}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Newarrivals;
