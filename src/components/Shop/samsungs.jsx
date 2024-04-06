import React from "react";
import Samsung from '../product/samsung.js';
import Item from '../Item/Item.jsx'


const Samsungs = () =>{
    return(
        <div>
        <h1 className="samsung">POPULAR SAMSUNG MOBILES</h1>
        <div className="popular-samsung">
            {Samsung.map((item,i)=>{

                return<Item key={i} id={item.id} name={item.name} color={item.color}image={item.image} new_price={item.new_price} old_price={item.old_price}   />

            })}
        </div>
        </div>
    )
}

export default Samsungs