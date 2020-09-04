import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Details from './pages/Details';
import ProductContainer from './pages/ProductContainer';
import Upload from './pages/Upload';
import Error from './pages/Error';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Modal from './components/Modal';


class App extends React.Component {

  render() {
    return (
      <React.Fragment>
         <Navbar />
         <Switch>
            <Route exact path = "/" component = {ProductContainer} />
            <Route exact path = "/details" component = {Details} />
            <Route exact path = "/cart" component = {Cart} />
            <Route exact path = "/upload" component = {Upload} />
            <Route component = {Error} />
         </Switch>
         <Modal />
      </React.Fragment>
    );
   }
}

export default App;
