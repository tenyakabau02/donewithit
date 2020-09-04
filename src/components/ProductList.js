import React from 'react';
import Product from './Product';
import Footer from './Footer';

function ProductList({products}) {

   if(products.length === 0) {
     return (
       <div className = "container empty-search">
         <h3>unfortunately no products matched your search</h3>
       </div>
     );
   }

    return (
     <React.Fragment>
        <div className = "py-4">
           <div className = "container">
             <div className = "row">
                  { products.map(product => {
                     return <Product key = {product.id} product = {product} />
                   })
                 }
             </div>
           </div>
        </div>
        <Footer />
     </React.Fragment>
    );
  }

export default ProductList;
