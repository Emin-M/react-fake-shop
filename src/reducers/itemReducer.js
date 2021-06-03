const INITIAL_STATE = {
    product: []
}

const itemReducer = (state=INITIAL_STATE, action) => {
   switch (action.type) {
       case "FETCH_ITEM":
              return { ...state, product: action.payload}
       default:
           return state;
   }
}

export default itemReducer;