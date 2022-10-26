import React, { useState } from "react";
import "./PeopleList.css";
import * as userAction from "./../../store/action";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";

const UserList = ({ users }) => {
  const curUsers = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [initialUName, setInitialUName] = useState("");
  const editHandler = (uname, name) => {
    setOpen(!open);
    setName(name);
    setUsername(uname);
    setInitialUName(uname);
  };
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };
  const deleteHandler = (uname) => {
    dispatch(userAction.deleteUser(uname));
  };
  const submitHandler = () => {
    const updatedData = {
      name: name,
      username: username,
    };
    console.log(initialUName, updatedData);
    dispatch(userAction.editUser(initialUName, updatedData));
    setOpen(false);
  };
  return users.map((user) => {
    return (
      <div className="header-list" key={user.username}>
        <div>{user.name}</div>
        <div>{user.username}</div>
        <div>
          <button onClick={editHandler.bind(this, user.username, user.name)}>
            Edit
          </button>
          <button onClick={deleteHandler.bind(this, user.username)}>
            Delete
          </button>
        </div>
        <Modal isOpen={open} onRequestClose={() => setOpen(false)}>
          <h1>Edit User</h1>
          <div className="field">
            <label>Name</label>
            <input type="text" value={name} onChange={nameChangeHandler} />
          </div>
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={usernameChangeHandler}
            />
          </div>
          <div>
            <button onClick={submitHandler}>Submit</button>
          </div>
        </Modal>
      </div>
    );
  });
};
const PeopleList = () => {
  const users = useSelector((state) => state.users);

  console.log(users);
  return (
    <div>
      <div className="header-list">
        <div className="header-text">Name</div>
        <div className="header-text">Username</div>
        <div className="header-text">Action</div>
      </div>
      <UserList users={users} />
    </div>
  );
};

export default PeopleList;
