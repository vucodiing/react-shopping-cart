const initialState = {
  info: [],
};

const reducerCart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CART": {
      return {
        info: action.data,
      };
    }
    default:
      return state;
  }
};

export default reducerCart;
