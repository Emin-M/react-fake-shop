import axios from "axios";

export const fetchItems = () => async (dispatch) => {
    const response = await axios.get('https://fakestoreapi.com/products');

    dispatch({type: "FETCH_SHOP", payload: response.data})
};

export const fetchItem = (shop) => {
    return {
        type: "FETCH_ITEM", 
        payload: shop
    }
};

/*export const fetchItem = (id) => async (dispatch) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);

    dispatch({type: "FETCH_ITEM", payload: response.data})
}*/

export const addToCard = (product) => {
    return {
        type: "ADD_TO_CARD",
        payload: product
    }
};

export const deleteItem = (id) => {
    return {
        type: "DELETE_FROM_CARD",
        payload: id
    }
};