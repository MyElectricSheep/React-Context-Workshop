import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { useAuthContext } from "./context/AuthContext";
import { useI18nContext } from "./context/I18nContext";

const Signin = () => {
  const { i18nData: t } = useI18nContext();

  const history = useHistory();
  const { setMe } = useAuthContext();

  const [loginInfo, setLoginInfo] = useState({
    login: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginInfo((prevLoginInfo) => ({
      ...prevLoginInfo,
      [e.target.name]: e.target.value,
    }));
  };

  const login = async (credentials) => {
    const { login: username, password } = credentials;
    try {
      const data = await axios.post(
        "https://wbs-simple-auth.herokuapp.com/auth/login",
        {
          username,
          password,
        }
      );
      const token = data.headers["x-authorization-token"];
      if (token) {
        console.log({ token });
        Cookies.set(`unicorns-token`, token);
        setMe(token);
        history.push("/admin");
      }
    } catch (e) {
      Cookies.remove(`unicorns-token`);
      console.log(e.message);
    }
  };

  return (
    <>
      <input
        value={loginInfo.login}
        type="text"
        name="login"
        placeholder={t.signin.login}
        onChange={handleChange}
      />
      <input
        value={loginInfo.password}
        type="text"
        name="password"
        placeholder={t.signin.password}
        onChange={handleChange}
      />
      <button onClick={() => login(loginInfo)}>{t.signin.button}</button>
      {t.signin.login}
      <br />
      <Link to="/signup">{t.signin.signupLink}</Link>
      {t.signin.signup}
    </>
  );
};

export default Signin;
