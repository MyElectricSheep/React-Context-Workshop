import React from "react";
import Home from "./Home";
import About from "./About";
import Admin from "./Admin";
import Signin from "./Signin";
import Signup from "./Signup";
import Logout from "./Logout";
import unicornPic from "../src/pics/unicorns_inc.jpg";
import { Link, Route, Switch } from "react-router-dom";
import { CompanyContextProvider } from "./context/CompanyContext";
import { AuthContextProvider } from "./context/AuthContext";
import { useI18nContext } from "./context/I18nContext";
import ProtectedRoute from "./ProtectedRoute";
import LanguageSwitcher from "./LanguageSwitcher";

const App = () => {
  const { i18nData: t } = useI18nContext();

  console.log(t);

  return (
    <div className="main-container">
      <img src={unicornPic} alt="Unicorns Inc" />
      <ul className="menu">
        <li>
          <Link to="/">{t.home.title}</Link>
        </li>
        <li>
          <Link to="/about">{t.about.title}</Link>
        </li>
        <li>
          <Link to="/admin">{t.admin.title}</Link>
        </li>
        <li>
          <Link to="/signin">{t.signin.title}</Link>
        </li>
        <li>
          <Link to="/signup">{t.signup.title}</Link>
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
      <LanguageSwitcher />
      <Logout />
    </div>
  );
};

export default App;
