import React from "react";
import { useState } from "react";


function Item({ name, category }) {

  const [inCart, setCart] = useState(false);

  function handleClick(event){
    setCart((inCart) => !inCart);  // When we click it change from outside cart to inside (inCart=true)
    event.target.textContent = "Remove From Cart"; 
  }

  const itemClass = inCart ? "in-cart" : "" 
  // {/* "" means the item is NOT in the cart */}. 
  // "" goes last because initially our cart is empty (inCart=false)
  // {/* "in-cart" the item is in the cart */}

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>Add to Cart</button>
    </li>
  );
}

export default Item;
