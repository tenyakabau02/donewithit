import React from 'react';
import { ProductConsumer } from '../context';
function ProductFilter({products}) {

   return (
       <ProductConsumer>
         {value => {

           //passing data from context
            const { handleChange, category} = value;

            //get all unique values

             const getUnique = (items,value) => {
              return [...new Set(items.map(item => item[value]))];
            }

           // get uniques categories
            let categories = getUnique(products,'category');

           //add all to the categories array
            categories = ["all",...categories];

            //map categories to jsx
            categories = categories.map((category,index) => {
              return <option value = {category} key = {index}>{category}</option>
            });

          return (
            <section className = "filter-container">
             <form className = "filter-form">
               {/* select  category type*/}
                <div className = "form-group">
                   <label htmlFor = "type">Filter by product type </label>
                   <select name = "category" id = "category" value = {category} className = "form-control" onChange = {handleChange}>
                     {categories}
                   </select>
                </div>
              {/* end select category type*/}

             </form>
            </section>
           );
         }}
       </ProductConsumer>
   );
}

export default ProductFilter;
