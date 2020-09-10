import React, { Fragment,useContext,useReducer, createContext,useEffect} from "react";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import { initialState, reducer } from "./reducer/reducer";
import HNavbar from "./Partials/Navbar";
import "./App.css";

export const UserContext = createContext();

const Routing = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    const user = localStorage.getItem("jwt");
    if (user) {
      dispatch({ type: "USER", payload: user });
    } 
  },[dispatch]);

  return (
    <section>
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />      
    </section>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Fragment>
      <UserContext.Provider value={{ state, dispatch }}>
        <Router>
          <HNavbar />
          <Routing />
        </Router>
      </UserContext.Provider>
    </Fragment>
  );
}

export default App;
