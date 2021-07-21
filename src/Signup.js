import React from "react";
import { Link } from "react-router-dom";
import { useI18nContext } from "./context/I18nContext";
const Signup = () => {
  const { i18nData: t } = useI18nContext();

  const notImplemented = () => {
    alert(t.signup.alertText);
  };

  return (
    <>
      <input type="text" placeholder={t.signup.email} />
      <input type="text" placeholder={t.signup.password} />
      <button onClick={notImplemented}>{t.signup.register}</button>
      <br />
      <Link to="/signin">{t.signin.button}</Link>
    </>
  );
};

export default Signup;
