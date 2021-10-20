import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchItems, addToCard } from "../actions";

function ShopList({ fetchItems, shops, card, addToCard }) {
  useEffect(() => {
    fetchItems();
  }, []);

  const cardFunction = (shop) => {
    const checkItem = card.card.find((c) => c.id === shop.id);
    if (checkItem === undefined) {
      addToCard(shop);
      toast.success("Item added card successfully!", {
        autoClose: 1500,
      });
    } else {
      toast.error("Item already Exists in the card!", {
        autoClose: 1500,
      });
    }
  };

  const renderList = shops.shops.map((shop) => {
    return (
      <div className="card" key={shop.title}>
        <Link to={`/product/${shop.id}`}>
          <div>
            <img className="card-img-top" src={shop.image} alt={shop.title} />
            <div className="card-body">
              <h5 className="card-title">{shop.title}</h5>
              <strong style={{ fontSize: "24px" }}>{shop.price} $</strong>
            </div>
          </div>
        </Link>
        <button
          className="btn btn-primary btn-lg"
          onClick={() => cardFunction(shop)}
        >
          Add To Card
        </button>
      </div>
    );
  });

  return <div className="containerr">{renderList}</div>;
}

const mapStateToProps = (state) => {
  return { shops: state.shops, card: state.card };
};

export default connect(mapStateToProps, { fetchItems, addToCard })(ShopList);
