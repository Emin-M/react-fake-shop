import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import './App.css';
import Header from './components/Header';
import ProductDetail from './components/ProductDetail';
import ShopList from "./components/ShopList";
import Card from "./components/Card";

function App({ product, card }) {
  console.log(card);
  return (
    <div>
    <BrowserRouter>
      <div>
         <Header />
         <Route path="/" exact component={ShopList} />
         <Route path={`/product/${product.product.id}`} exact component={ProductDetail} />
         <Route path="/card" exact component={Card} />
      </div>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {product: state.product,
          card: state.card
  }
}

export default connect(mapStateToProps)(App);
