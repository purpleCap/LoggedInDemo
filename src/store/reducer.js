const initialState = [
  {
    name: "Amal",
    username: "abcd1234",
  },
  {
    name: "Bimal",
    username: "xyz123",
  },
  {
    name: "Komal",
    username: "1234abcd",
  },
];

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      const updatedState = [...state, action.payrole];
      return updatedState;

    case "DELETE":
      const newState = state.filter((user) => user.username !== action.payrole);
      return [...newState];

    case "EDIT":
      const selectedUserIndex = state.findIndex(
        (user) => user.username === action.payrole.username
      );
      console.log("index: " + selectedUserIndex);
      state[selectedUserIndex] = action.payrole.data;
      return [...state];
    default:
      return state;
  }
};

export default userReducer;
