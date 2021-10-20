import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchItem, addToCard } from "../actions";

function ProductDetail({ card, product, fetchItem, addToCard }) {
  const { id } = useParams();

  useEffect(() => {
    fetchItem(id);
  }, []);

  const cardFunction = (pr) => {
    const checkItem = card.card.find((c) => c.id === pr.id);
    if (checkItem === undefined) {
      addToCard(pr);
      toast.success("Item added card successfully!", {
        autoClose: 1500,
      });
    } else {
      toast.error("Item already Exists in the card!", {
        autoClose: 1500,
      });
    }
  };

  return (
    <div className="details">
      <div className="contain">
        <img src={product.product.image} alt={product.product.title} />
        <div className="right">
          <h1>{product.product.title}</h1>
          <p>{product.product.description}</p>
          <span>{product.product.price}$</span>
          <button
            onClick={() => cardFunction(product.product)}
            className="btn btn-primary btn-lg"
          >
            Add To Card
          </button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { product: state.product, card: state.card };
};

export default connect(mapStateToProps, { fetchItem, addToCard })(
  ProductDetail
);
