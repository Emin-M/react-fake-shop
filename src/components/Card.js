import React from "react";
import { connect } from "react-redux";


const Card = ({ card }) => {
    console.log(card.card);
    const renderList = card.card.map((item) => { 
        return (
            <div>
                <img src={item.card.image} alt={item.card.title} />
                <h1>{item.title}</h1>
            </div>
        )
    })

    return (
        <div>{renderList}</div>
    )
}

const mapStateToProps = (state) => {
    return { card: state.card }
}

export default connect(mapStateToProps)(Card);