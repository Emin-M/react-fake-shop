import React from "react";
import { connect } from "react-redux";
import { deleteItem } from "../actions";
import { toast } from "react-toastify";


const Card = ({ card, deleteItem }) => {
    const del = (id) => {
        deleteItem(id)
        toast.warning('Item deleted from card!', {
            autoClose: 1500
          });
    }

    const renderList = card.card.map((item) => {
        return (
            <div className="card" key={Math.random()}>
            <i className="fas fa-times-circle"
            onClick={()=>del(item.card.id)}></i>
              <div className="card-body">
                <h4 className="card-title">{item.card.title}</h4>
              </div>
             <img className="card-img-bottom" src={item.card.image} alt={item.card.title} />
           </div>
        )
    })

    return (
        <div style={{"marginTop":'70px',"display":'flex',"flexWrap":'wrap'}}>{renderList}</div>
    )
}

const mapStateToProps = (state) => {
    return { card: state.card }
}

export default connect(mapStateToProps, { deleteItem })(Card);