import React, { useEffect } from "react";
import { connect } from "react-redux";
import { deleteItem } from "../actions";
import { toast } from "react-toastify";


const Card = ({ card, deleteItem }) => {
    const del = (id) => {
        deleteItem(id)
        toast.warn('Item deleted from card!', {
            autoClose: 1500
          });
    };

    const decCount = (id) => {
        const findItem = card.card.find(c => c.id === id)
        findItem.count -= 1;
    };

    const incCount = (id) => {
        const findItem = card.card.find(c => c.id === id)
        findItem.count += 1;
    };

    const renderList = card.card.map((item) => {
        return (
            <div className="card" key={item.id}>
            <i className="fas fa-times-circle"
            onClick={()=>del(item.id)}></i>
              <div className="card-body">
                <h4 className="card-title">{item.title}</h4>
              </div>
             <img className="card-img-bottom" src={item.image} alt={item.title} />
             <div className="card-bottom">
              <div className="count">
                <button className="btn btn-primary"
                        onClick={()=>decCount(item.id)}>-</button>
                <span className="count-s">{item.count}</span>
                <button className="btn btn-primary"
                        onClick={()=>incCount(item.id)}>+</button>
              </div> 
              <div className="price">
               <span>Price: {item.price * item.count} $</span>
              </div>
             </div>
           </div>
        )
    });

    return (
        <div style={{"marginTop":'70px',"display":'flex',"flexWrap":'wrap'}}>{renderList}</div>
    )
}

const mapStateToProps = (state) => {
    return { card: state.card }
}

export default connect(mapStateToProps, { deleteItem })(Card);