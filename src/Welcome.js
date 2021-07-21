import React from "react";
import { useCompanyContext } from "./context/CompanyContext";
import { useI18nContext } from "./context/I18nContext";

const Welcome = () => {
  const { i18nData: t } = useI18nContext();
  const {
    companyInfo: { customers, name },
  } = useCompanyContext();
  return (
    <>
      <p>
        {t.welcome.main} {name}! {customers} {t.welcome.daily}!
      </p>
    </>
  );
};

export default Welcome;
