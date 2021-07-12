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
                   {
                       count: 1,
                       id: action.payload.id,
                       title: action.payload.title,
                       image: action.payload.image,
                       price: action.payload.price
                   }
                ]
              }; 
        case "DELETE_FROM_CARD":
            return {
                ...state,
                card: state.card.filter((item) => item.id !== action.payload)
              };
        default:
            return state;
    }
}

export default cardReducer;