const INITIAL_STATE = {
  card: [],
};

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
            price: action.payload.price,
          },
        ],
      };
    case "DELETE_FROM_CARD":
      return {
        ...state,
        card: state.card.filter((item) => item.id !== action.payload),
      };
    case "DECRESE_COUNT":
      const findItem = state.card.find((c) => c.id === action.payload);
      if (findItem.count === 1) {
        findItem.count = 1;
      } else {
        findItem.count -= 1;
      }
      return {
        ...state,
        card: state.card,
      };
    case "INCREASE_COUNT":
      const findItem1 = state.card.find((c) => c.id === action.payload);
      findItem1.count += 1;
      return {
        ...state,
        card: state.card,
      };
    case "CLEAR CARD":
      return { ...state, card: [] };
    default:
      return state;
  }
};

export default cardReducer;
