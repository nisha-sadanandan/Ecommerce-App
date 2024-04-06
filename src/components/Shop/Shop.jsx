import React from "react";
import Product from '../product/Apple.js';
import Item from '../Item/Item.jsx'
import Banner from '../assets/image/section.png'


const Shop= () =>{
    return(
        <div className="shop">
        <img src={Banner} alt="banner"/>
        <h1 className="apple">Popular Apple Mobiles</h1>
        <div className="popular-apple">
            {Product.map((item,i)=>{

                return<Item key={i} id={item.id} name={item.name} color={item.color}image={item.image} new_price={item.new_price} old_price={item.old_price}   />
            })}
        </div>
        </div>
    )
}

export default Shop