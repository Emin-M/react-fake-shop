import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchItems, fetchItem } from "../actions";

function ShopList({ fetchItems, shops, fetchItem }) {
    useEffect(()=> {
        fetchItems();
    },[])

    const renderList = shops.shops.map((shop)=>{
        return (
            <Link to={`/product/${shop.id}`} key={shop.title}>
               <div className="card"  
                    onClick={()=>fetchItem(shop.id)}>
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
          </Link>
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

export default connect(mapStateToProps, {fetchItems, fetchItem})(ShopList);