import React from "react";
import Access from './product/accessories.js';
import Item from '../components/Item/Item.jsx';
import Deal from '../components/assets/image/deals.png';


const Accessories= () =>{
    return(
        <div className="access"> 
        <img src={Deal} alt="deal"/>
        <div className="popular-access">
            {Access.map((item,i)=>{

                return<Item key={i} id={item.id} name={item.name} color={item.color}image={item.image} new_price={item.new_price} old_price={item.old_price}   />

            })}
        </div>
        </div>
    )
}

export default Accessories;