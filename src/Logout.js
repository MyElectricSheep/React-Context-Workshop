import React from "react";
import { useI18nContext } from "./context/I18nContext";

const Logout = () => {
  const { i18nData: t } = useI18nContext();
  return (
    <>
      <br />
      <button
        style={{ marginTop: "2em" }}
        onClick={() => {
          alert(t.logout.alertText);
        }}
      >
        {t.logout.button}
      </button>
    </>
  );
};

export default Logout;
