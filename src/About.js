import React from "react";
import { useI18nContext } from "./context/I18nContext";

const About = () => {
  const { i18nData: t } = useI18nContext();
  return (
    <>
      <div>{t.about.title}</div>
    </>
  );
};

export default About;
