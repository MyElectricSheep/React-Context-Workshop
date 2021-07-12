import React from "react";
import Home from "./Home"
import About from "./About"
import Admin from "./Admin"
import Signin from "./Signin"
import Signup from "./Signup"
import Logout from "./Logout"
import unicornPic from "../src/pics/unicorns_inc.jpg"
import { Link, Route, Switch } from "react-router-dom";
import { CompanyContextProvider } from "./context/CompanyContext"
import { AuthContextProvider } from "./context/AuthContext"
import ProtectedRoute from "./ProtectedRoute"

const App = () => {

  return (
    <div className="main-container">
      <img src={unicornPic} alt="Unicorns Inc" />
      <ul className="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
        <li>
          <Link to="/signin">Signin</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
      <CompanyContextProvider>
        <AuthContextProvider>
          <Switch>
                <Route path="/about" component={About} />
                <ProtectedRoute path="/admin" component={Admin} />
                <Route path="/signin" component={Signin} />
                <Route path="/signup" component={Signup} />
                <Route exact path="/" component={Home} />
          </Switch>
        </AuthContextProvider>
      </CompanyContextProvider>
      {true && <Logout />}
    </div>
  );
};


export default App;
