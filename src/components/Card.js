import React from "react";
import { connect } from "react-redux";
import { deleteItem } from "../actions";


const Card = ({ card, deleteItem }) => {
    const renderList = card.card.map((item) => {
        return (
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">{item.card.title}</h4>
                <p className="card-text">{item.card.description}</p>
                <button 
                   className="btn btn-primary"
                   onClick={()=>deleteItem(item.card.id)}
                   >Remove Item</button>
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