import React, { useState } from "react";
import "./login.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [isLoggedin, setIsLoggedin] = useState(false);

  const usenameChangeHandler = (event) => {
    setUsername(event.target.value);
  };
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const users = useSelector((state) => state.users);
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const selectedUser = users.find((user) => user.username === username);
    if (selectedUser.name === name) {
      setIsLoggedin(true);
      navigate("/details");
      props.setLoggedInState(true);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <form onSubmit={formSubmitHandler}>
          <div className="form">
            <div className="field">
              <label>username</label>
              <input type="text" onChange={usenameChangeHandler} />
            </div>
            <div className="field">
              <label>name</label>
              <input type="text" onChange={nameChangeHandler} />
            </div>
            <button>login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
