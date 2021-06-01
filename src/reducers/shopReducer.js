const INITIAL_STATE = {
    shops: []
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "FETCH_SHOP":
            return { ...state, shops: action.payload }
        default:
            return state;
    }
}

export default shopReducer;