import React, { useState } from "react";
import Welcome from "./Welcome";
import { useCompanyContext } from "./context/CompanyContext";
import { useI18nContext } from "./context/I18nContext";

const Admin = () => {
  const { companyInfo, setCompanyInfo } = useCompanyContext();
  const { i18nData: t } = useI18nContext();
  const [newCustomerValue, setNewCustomerValue] = useState("");
  return (
    <>
      <h3>{companyInfo.name}</h3>
      <br />
      <div>{t.admin.title}</div>
      <br />
      <Welcome />
      <br />
      <div>{t.admin.content}</div>
      <br />
      <input
        className="admin-input"
        value={newCustomerValue}
        onChange={(e) => setNewCustomerValue(e.target.value)}
        placeholder={t.admin.changeCustomers}
        type="text"
      />{" "}
      <button
        onClick={(e) => {
          setCompanyInfo((prevInfo) => ({
            ...prevInfo,
            customers: newCustomerValue,
          }));
          setNewCustomerValue("");
        }}
      >
        {t.admin.save}
      </button>
    </>
  );
};

export default Admin;
