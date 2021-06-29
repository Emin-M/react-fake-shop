const INITIAL_STATE = {
    card: []
}

export const cardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_TO_CARD":
            return {
                ...state,
                card: [
                  ...state.card,
                  {card: action.payload}
                ]
              }; 
        case "DELETE_FROM_CARD":
            return {
                ...state,
                card: state.card.filter((item) => item.card.id !== action.payload)
              };
        default:
            return state;
    }
}

export default cardReducer;