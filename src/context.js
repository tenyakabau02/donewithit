import React from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();

class ProductProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      products : [],
      sortedProducts : [],
      detailProduct: detailProduct,
      cart : [],
      category : "all",
      modalOpen : false,
      modallProduct : detailProduct,
      cartSubTotal : 0,
      cartTax : 0,
      cartTotal : 0
    };
  }

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item =>{
      const singleItem = {...item};
      tempProducts = [...tempProducts, singleItem];
    })
    this.setState(() => {
      return {
        products : tempProducts,
        sortedProducts : tempProducts
      }
    });
  }

  // function to handle change on any input box
  handleChange = (event) => {
    const target = event.target;
    const name = event.target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name] : value
    },this.filterProducts)
  };

  // function to filter the rooms

  filterProducts = () => {
    let { sortedProducts, products, category } = this.state;

    //all the rooms
    let tempProducts = [...products];

    //filter by category
    if (category !== "all") {
      tempProducts = tempProducts.filter(product =>  product.category === category);
    }

     //change state
      this.setState({
        sortedProducts : tempProducts
      });
  };


  getItem = (id) => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  }

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct : product }
    })
  }

  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(() => {
      return {
        products : tempProducts,
        cart : [...this.state.cart, product]
      };
    }, () => {
      this.addTotals();
    })
  };

openModal = (id) => {
  const product = this.getItem(id);
  this.setState(() => {
    return { modallProduct : product, modalOpen: true }
  })
}

  closeModal = () => {
    this.setState(() => {
      return { modalOpen : false}
    })
  }

  increment = (id) => {
   let tempCart = [...this.state.cart];
   const selectedProduct = tempCart.find(item => item.id === id);

   const index = tempCart.indexOf(selectedProduct);
   const product = tempCart[index];

   product.count = product.count + 1;
   product.total = product.count * product.price;

   this.setState(() => {
     return {cart : [...tempCart]}
   }, () => {
     this.addTotals();
   });
 };

  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count - 1;
    if (product.count === 0) {
      this.removeItem(id);
    } else {
        product.total = product.count * product.price;
        this.setState(() => {
          return {cart : [...tempCart]}
        }, () => {
          this.addTotals();
        });
    }
  };

  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart]

    tempCart = tempCart.filter(item => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(() => {
      return {
        cart : [...tempCart],
        products : [...tempProducts]
      }
    }, () => {
      this.addTotals();
    })

  }

// clear all the items in your cart
  clearCart = () => {
    this.setState(() => {
      return {cart: []}
    }, () => {
      this.setProducts();
      this.addTotals();
    });
  };

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => {
     return subTotal += item.total
    });
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubTotal:subTotal,
        cartTax: tax,
        cartTotal : total
      };
    })
  }

  render() {
    return (
      <ProductContext.Provider value = {{
        ...this.state,
        getItem : this.getItem,
        handleChange : this.handleChange,
        handleDetail : this.handleDetail,
        addToCart : this.addToCart,
        openModal : this.openModal,
        closeModal : this.closeModal,
        increment : this.increment,
        decrement : this.decrement,
        removeItem : this.removeItem,
        clearCart : this.clearCart
      }}>
         {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export function withProductConsumer(Component){
  return function ConsumerWrapper(props){
    return <ProductConsumer>
    { value => <Component {...props} context = {value} />}
    </ProductConsumer>
  }
}

export { ProductProvider, ProductConsumer};
