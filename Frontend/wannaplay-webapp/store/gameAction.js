const GameAction = (game) => {
    return {
      type: "INPUT_GAME",
      data: game,
    };
  };
  
  export default GameAction;