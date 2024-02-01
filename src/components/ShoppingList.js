import React from "react";
import Item from "./Item";
import { useState } from "react";


function ShoppingList({ items }) {

  // Initialise a variable to contain a coppy of the array of all shopping items 
  const itemData = items;	

  // set initial state of selectedCategory to be a string of "All" to match the first <option> in dropdown
  const [selectedCategory, setSelectedCategory] = useState("All") 

  // This is the filter value being set onChange using setSelectedCategory function
  function handleChange(event){
    setSelectedCategory(event.target.value)
  }

  // Filter items based on the selectedCategory
  const itemsToDisplay = itemData.filter((item) => {	
    if (selectedCategory === "All") {				          // selectedCategory is the value of <select> .i.e. event.target.value 
      return true;
    } else {
      return item.category === selectedCategory;			// With filter, for all elements that return false, don't add them to the new array.
    }
  });


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (  // changed items to the itemsToDisplay
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
