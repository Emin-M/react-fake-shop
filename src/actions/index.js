import axios from "axios";

export const fetchItems = () => async (dispatch) => {
    const response = await axios.get('https://fakestoreapi.com/products');

    dispatch({type: "FETCH_SHOP", payload: response.data})
};

export const fetchItem = (id) => async (dispatch) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);

    dispatch({type: "FETCH_ITEM", payload: response.data})
}

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

export const decraseCount = (id) => {
    return {
        type: "DECRESE_COUNT",
        payload: id
    }
};

export const increaseCount = (id) => {
    return {
        type: "INCREASE_COUNT",
        payload: id
    }
};

export const clearCard = () => {
    return {type: "CLEAR CARD"}
}

export const filterToHigh = () => {
    return {type: "FILTERTOHIGH"}
}

export const filterToLower = () => {
    return {type: "FILTERTOLOWER"}
}