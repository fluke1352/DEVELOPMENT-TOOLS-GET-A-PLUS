const initialState = {
  game_info: "",
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INPUT_GAME":
      return { game_info: action.data };
    default:
      return state;
  }
};

export default gameReducer;
