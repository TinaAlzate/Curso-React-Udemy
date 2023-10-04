import { useState } from "react";
import {AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {
  
    const [ categories, setCategories ] = useState([ 'One Punch' ]);

    const onAddCategory = (newCategory) => {
      const categoriesLowerCase = categories.map(category => category.toLowerCase());
      if (categoriesLowerCase.includes(newCategory.toLowerCase()) ) return;
      setCategories([newCategory, ...categories])
    }

  return (
    <>

      <h1>GifExpertApp</h1>

      <AddCategory  
        onNewCategory={ onAddCategory } />

      {
        categories.map((category) => (
          <GifGrid 
            key={ category }
            category={ category }/>
        ))
      }

    </>
  );
}
