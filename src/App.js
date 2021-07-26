import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import './App.css';
import { ToastContainer } from "react-toastify";
import Header from './components/Header';
import ProductDetail from './components/ProductDetail';
import ShopList from "./components/ShopList";
import Card from "./components/Card";
import { addToCard } from "./actions";

const IFLS = JSON.parse(localStorage.getItem("card"));

const App = ({ card, addToCard }) => {

  useEffect(() => {
    if(IFLS){
    IFLS.card.map(item => {
        addToCard(item)
    })
  }
  }, []) 

  useEffect(() => {
    localStorage.setItem("card", JSON.stringify(card))
   }, [card])

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

const mapStateToProps = (state) => {
  return { card: state.card }
}

export default connect(mapStateToProps, { addToCard })(App);
