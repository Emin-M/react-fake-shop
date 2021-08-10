import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteItem, decraseCount, increaseCount, addToCard, clearCard } from "../actions";
import { toast } from "react-toastify";


const Card = ({card, deleteItem, decraseCount, increaseCount, addToCard,   clearCard})=>{
    let [ totalPrice, setTotalPrice ] = useState(Number())
    const [ hr, setHr ] = useState();

    useEffect(() => {
        card.card.length > 0 ? setHr(true) : setHr(false)

        let tP = Number()
        card.card.map(c => {
            tP += c.price * c.count
        })
        setTotalPrice(tP)
    }, [card]);

    const del = (id) => {
        deleteItem(id)
        toast.warn('Item deleted from card!', {
            autoClose: 1500
          });
    };

    const decCount = (id) => {
        decraseCount(id)
    };

    const incCount = (id) => {
        increaseCount(id)
    };

    const renderList = card.card.map((item) => {
        return (
          <div className="cover" key={Math.random()}>
            <div className="div1">
                <div className="image-div">
                   <img src={item.image} alt="item" />
                </div>
                <h4>{item.title}</h4>
            </div>
            <h2>{item.price * item.count} $</h2>
            <div className="count"> 
                <p className="btnn"
                      onClick={()=>decCount(item.id)}>-</p>
                    <span>{item.count}</span>
                <p className="btnn"
                        onClick={()=>incCount(item.id)}>+</p>
            </div> 
            <i className="fas fa-trash"
               onClick={()=>del(item.id)}></i>
          </div>
        )
    });

    return (
        <div>
            <ul className="container">
                <li>Item</li>
                <li>Price</li>
                <li>Quantity</li>
                <li>#</li>
            </ul>
            <hr className="hr" />
            <div className="list container">{renderList}</div>
            {hr ? <hr className="hrr" /> : ""}
            <div className={hr ? "total" : "total totall"}> 
                <div className="totalBtns">
                    <Link to="/"><button className="btn btn-primary">
                     Continue Shopping</button></Link>
                    <button onClick={()=>clearCard()}
                            className="btn btn-danger">
                    Clear Shopping Card</button>
                </div>
                <div className="totalPrice">
                    <h3 style={{fontWeight:"600"}}>
                    Subtotal : $ {totalPrice.toFixed(2)}</h3>
                    <h4>Shipping Fee : {hr ? 3.24 : 0.00} $</h4>
                    <hr className="hrrr" />
                    <h1 style={{fontWeight:"600"}}>
                    Order Total: $ {Number(totalPrice.toFixed(2)) + 3.24}</h1>
                </div>
                <button className="btn btn-lg btn-success">
                Make a Payment</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { card: state.card }
}

export default connect(mapStateToProps, { deleteItem, decraseCount, increaseCount, addToCard, clearCard })(Card);