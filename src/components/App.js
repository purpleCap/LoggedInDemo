import React, { useState } from "react";
import Screen from "./ScreenComponents/Screen";
import userReducer from "../store/reducer";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./ScreenComponents/login";
const rootReducers = combineReducers({
  users: userReducer,
});
const store = createStore(rootReducers);

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const holdLoggedInStateHandler = (newState) => {
    setIsLoggedIn(newState);
  };
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route
              path="/"
              element={<Login setLoggedInState={holdLoggedInStateHandler} />}
            />
            <Route
              path="/details"
              element={<Screen isLoggedIn={isLoggedIn} />}
            />
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
};

export default App;
