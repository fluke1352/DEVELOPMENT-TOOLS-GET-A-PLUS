const initialState = {
  username: "",
};

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INPUT_USERNAME":
      return { username: action.data };
    default:
      return state;
  }
};

export default inputReducer;
