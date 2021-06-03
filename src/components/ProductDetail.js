import React from "react"
import { connect } from "react-redux";

function ProductDetail({ product }) {
    return (
        <div className="details">
            <div className="contain">
                <img src={product.product.image} 
                     alt={product.product.title} />
                <div className="right">
                    <h1>{product.product.title}</h1>
                    <p>{product.product.description}</p>
                    <span>{product.product.price}$</span>
                    <button className="btn btn-primary btn-lg">
                    Add To Card</button>
                </div>     
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { product: state.product }
}

export default connect(mapStateToProps)(ProductDetail);
