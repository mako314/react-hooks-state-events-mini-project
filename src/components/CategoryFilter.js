import React from "react";
import { useState } from "react";

function CategoryFilter({CATEGORIES, handleCategoryChange}) {

    const [catagoryHolder, setCategory] = useState(CATEGORIES)
  

  // console.log(catagoryHolder)

  const categoryButtons = catagoryHolder.map((category) => {
    return (
    <button key={category}>{category}</button>
    )
    })

  function categorySelector(){
    // console.log(category)
    // handleCategoryChange()
  }



  return (
    <div className="categories">
      <h5>Category filters</h5>
      <div onClick={categorySelector}>
        
        {categoryButtons}
        
        </div>
    </div>
  );
}

export default CategoryFilter;
