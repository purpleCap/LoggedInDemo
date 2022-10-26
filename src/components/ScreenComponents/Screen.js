import React from "react";
import AddUser from "./AddUser";
import PeopleList from "./PeopleList";
// import { useRoutes } from "react-router-dom";

const Screen = (props) => {
  let content;
  if (props.isLoggedIn) {
    content = (
      <div>
        <AddUser />
        <PeopleList />
      </div>
    );
  } else {
    content = (
      <div>
        <h1>You need to logged in to visit this page</h1>
      </div>
    );
  }
  return content;
};

export default Screen;
