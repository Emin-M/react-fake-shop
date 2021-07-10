import React, { useEffect } from "react"
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchItem, addToCard } from "../actions";

function ProductDetail({ product, fetchItem, addToCard }) {
    const {id} = useParams();
    const history = useHistory();

    useEffect(() => {
        fetchItem(id)
    }, []);

    const card = (e, pr) => {
        addToCard(pr)
        history.push("/")
        e.preventDefault()
        toast.success("Item added card successfully!", {
            autoClose: 1500
        })
    }

    return (
        <div className="details">
            <div className="contain">
                <img src={product.product.image} 
                     alt={product.product.title} />
                <div className="right">
                    <h1>{product.product.title}</h1>
                    <p>{product.product.description}</p>
                    <span>{product.product.price}$</span>
                    <button onClick={(e)=>card(e, product.product)}
                            className="btn btn-primary btn-lg">
                           Add To Card</button>
                </div>     
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { product: state.product }
}

export default connect(mapStateToProps,{ fetchItem, addToCard })(ProductDetail);
