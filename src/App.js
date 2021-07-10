import { Route } from "react-router-dom";
import './App.css';
import { ToastContainer } from "react-toastify";
import Header from './components/Header';
import ProductDetail from './components/ProductDetail';
import ShopList from "./components/ShopList";
import Card from "./components/Card";

function App() {
  return (
      <div>
         <ToastContainer />
         <Header />
         <Route path="/" exact component={ShopList} />
         <Route path={"/product/:id"} exact component={ProductDetail} />
         <Route path="/card" component={Card} />
    </div>
  );
}

export default App;
