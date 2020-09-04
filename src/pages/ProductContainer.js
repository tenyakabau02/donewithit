import React from 'react';
import Title from '../components/Title';
import ProductFilter from '../components/ProductFilter';
import ProductList from '../components/ProductList';
import { withProductConsumer} from '../context';

function ProductContainer({context}) {

      const { sortedProducts, products } = context;
      return (
        <React.Fragment>
        <div className = "overflow-hidden">
            <Title name = "our" title = "products" />
            <ProductFilter products = {products} />
            <ProductList products = {sortedProducts} />
        </div>
        </React.Fragment>
      );
  }

export default withProductConsumer(ProductContainer);
