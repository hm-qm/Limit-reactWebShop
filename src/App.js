import styles from './App.module.scss';
import Catalogue from './Containers/Catalogue';
import CartPage from './Containers/CartPage';
import { CartProvider } from './Context/CartContext/CartProvider';
import Nav from './Containers/Nav';
import Hero from './Containers/Hero';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductPage from './Containers/ProductPage/ProductPage';


const App = () => {


  return (
    <div className={styles.App}>
    <Router>
      <CartProvider>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Hero />
            <Catalogue />
          </Route>

          <Route path="/cart" component={CartPage}>
            <CartPage />
          </Route>

          <Route path="/catalogue" component={Catalogue}>
            <Catalogue />
          </Route>

          <Route path="/product/:id" component={ProductPage}>
            <ProductPage />
          </Route>
          
        </Switch>
      </CartProvider>
    </Router>
    </div>
  );
}

export default App;
