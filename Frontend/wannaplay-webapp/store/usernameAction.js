const UsernameAction = (name) => {
  return {
    type: "INPUT_USERNAME",
    data: name,
  };
};

export default UsernameAction;