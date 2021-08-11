const INITIAL_STATE = {
    shops: []
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "FETCH_SHOP":
            return { ...state, shops: action.payload }
        case "FILTERTOHIGH":
            const filtered1 = state.shops.sort((a, b) => a.price - b.price)
            return { ...state, shops: filtered1 }
        case "FILTERTOLOWER":
            const filtered2 = state.shops.sort((a, b) => b.price - a.price)
            return { ...state, shops: filtered2 }
        default:
            return state;
    }
}

export default shopReducer;