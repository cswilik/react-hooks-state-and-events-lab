import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setCategory] = useState("Filter by category")
  console.log(selectedCategory)
  
 

  function handleFilterChange(e) {
    setCategory(e.target.value)

  }

  const itemsToDisplay = items.filter((item) => {
     return (item.category === selectedCategory) 
     

  })

  console.log(itemsToDisplay)

    // if (selectedCategory === "Produce") { 
    //   let itemsToDisplay = selectedCategory.filter(item => item.category === "Produce" );
    // } else if (selectedCategory === "Dairy") {
    //   let itemsToDisplay = selectedCategory.filter(item => item.category === "Dairy")
    // } else if (selectedCategory === "Dessert") {
    //   let itemsToDisplay = selectedCategory.filter(item => item.category === "Desser")
    // } 

    

  

    
    

    // const itemElements = itemsToDisplay.map((item) => {
    //   return (
    //   <Item key={item.id} name={item.name} category={item.category} />
    //   )
    // })
 
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
      {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
