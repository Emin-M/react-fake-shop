import React from "react";
import { connect } from "react-redux";


const Card = ({ card }) => {
    const renderList = card.card.map((item) => { 
        return (
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">{item.card.title}</h4>
                <p className="card-text">{item.card.description}</p>
                <a href="#" className="btn btn-primary">Remove Item</a>
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

export default connect(mapStateToProps)(Card);