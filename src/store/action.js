export const addUser = (data) => {
  return { type: "ADD", payrole: data };
};

export const deleteUser = (username) => {
  return { type: "DELETE", payrole: username };
};
export const editUser = (username, data) => {
  return { type: "EDIT", payrole: { username, data } };
};
