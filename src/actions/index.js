import axios from "axios";

export const fetchItems = () => async (dispatch) => {
    const response = await axios.get('https://fakestoreapi.com/products');

    dispatch({type: "FETCH_SHOP", payload: response.data})
}

export const fetchItem = (id) => async (dispatch) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);

    dispatch({type: "FETCH_ITEM", payload: response.data})
}