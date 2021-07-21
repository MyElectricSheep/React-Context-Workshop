import React, { useState } from "react";
import { useI18nContext } from "./context/I18nContext";

const LanguageSwitcher = () => {
  const { i18nData: t, setI18nData, i18n } = useI18nContext();
  const [english, setEnglish] = useState(true);
  return (
    <>
      <div style={{ paddingTop: "2em" }}>
        {t.language.current}: {english ? "English" : "German"}.
      </div>
      <button
        onClick={() => {
          english ? setI18nData(i18n["de"]) : setI18nData(i18n["en"]);
          setEnglish(!english);
        }}
      >
        {t.language.change}
      </button>
    </>
  );
};

export default LanguageSwitcher;
