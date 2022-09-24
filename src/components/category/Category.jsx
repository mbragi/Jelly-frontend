import React from "react";
import '../../pages/products/Products.css';

const Category = ({ category }) => {
 return (
  <>
   <div className='category'>
    <input id={category._id} type="checkbox" name={category.name} />
    <label htmlFor={category._id} className='label'>{category.name}</label>
   </div>
  </>
 )
}
export default Category;