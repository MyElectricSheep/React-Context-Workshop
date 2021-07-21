import React from "react";
import Welcome from "./Welcome";
import { useI18nContext } from "./context/I18nContext";

const Home = () => {
  const { i18nData: t } = useI18nContext();
  return (
    <>
      <div>{t.home.title}</div>
      <br />
      <Welcome />
      <br />
    </>
  );
};

export default Home;
