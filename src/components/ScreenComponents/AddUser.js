import React, { useState } from "react";
import * as userAction from "./../../store/action";
import "./AddUser.css";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
const AddUser = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [btnActive, setBtnActive] = useState(false);
  const dispatch = useDispatch();

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };
  const submitHandler = () => {
    if (username.length !== 0 && name.length !== 0) {
      let newuser = {
        username: username,
        name: name,
      };
      dispatch(userAction.addUser(newuser));
      setUsername("");
      setName("");
      setBtnActive(true);
      setIsOpen(!isOpen);
    } else {
      setBtnActive(false);
    }
  };

  const modalHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="adduser">
      <button className="btn" onClick={modalHandler}>
        Add User
      </button>
      <input className="input" type="text" placeholder="search" />
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <h1>New User</h1>
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
};

export default AddUser;
