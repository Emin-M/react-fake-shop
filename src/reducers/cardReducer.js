const INITIAL_STATE = {
    card: []
}

const cardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_TO_CARD":
            return {
                ...state,
                card: [
                  ...state.card,
                  {card: action.payload}
                ]
              }; 
        default:
            return state;
    }
}

export default cardReducer;