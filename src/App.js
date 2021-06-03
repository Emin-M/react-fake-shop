import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import './App.css';
import Header from './components/Header';
import ProductDetail from './components/ProductDetail';
import ShopList from "./components/ShopList";

function App({ product }) {
  console.log(product.product.id);
  return (
    <div className="App">
    <BrowserRouter>
      <div>
         <Header />
         <Route path="/" exact component={ShopList} />
         <Route path={`/product/${product.product.id}`} exact component={ProductDetail} />
      </div>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {product: state.product}
}

export default connect(mapStateToProps)(App);
