import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchItems } from "../actions";

function ShopList({ fetchItems, shops }) {
    useEffect(()=> {
        fetchItems();
    },[])

    const renderList = shops.shops.map((shop)=>{
        return (
            <div className="card" key={shop.title}>
             <img 
             className="card-img-top" 
             src={shop.image} 
             alt={shop.title} />
            <div className="card-body">
              <h5 className="card-title">{shop.title}</h5>
              <strong style={{fontSize:'24px'}}>{shop.price} $</strong>
            </div>
            <button className="btn btn-primary btn-lg">Add To Card</button>
          </div>
        )
    })

    return (
        <div className="containerr">
            {renderList}
        </div>
    )
}

const mapStateToProps = (state) => {
    return { shops: state.shops }
}

export default connect(mapStateToProps, { fetchItems })(ShopList);