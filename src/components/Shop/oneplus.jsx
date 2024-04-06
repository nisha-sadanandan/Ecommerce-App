import React from "react";
import OnePlus from '../product/Oneplus.js';
import Item from '../Item/Item.jsx'



const Oneplus= () =>{
    return(
        <div>  
        <h1 className="oneplus">EXCLUSIVE ONEPLUS MOBILES</h1>
        <div className="exclusive-oneplus">
            {OnePlus.map((item,i)=>{

                return<Item key={i} id={item.id} name={item.name} color={item.color}image={item.image} new_price={item.new_price} old_price={item.old_price}/>

            })}
        </div>
        </div>
    )
}

export default Oneplus;