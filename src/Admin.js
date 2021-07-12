import React, { useState } from "react";
import Welcome from "./Welcome";
import { useCompanyContext } from "./context/CompanyContext"

const Admin = () => {
  const { setCompanyInfo } = useCompanyContext() 
  const [newCustomerValue, setNewCustomerValue] = useState("")
  return (
    <>
      <h3>Company name</h3>
      <br />
      <div>Admin Page</div>
      <br />
      <Welcome />
      <br />
      <div>Lots of important secret stuff...</div>
      <br />
      <input
        className="admin-input"
        value={newCustomerValue}
        onChange={(e) => setNewCustomerValue(e.target.value)}
        placeholder="Change the number of daily customers"
        type="text"
      /> <button
        onClick={(e) => {
          setCompanyInfo(prevInfo => ({ ...prevInfo, customers: newCustomerValue }));
          setNewCustomerValue("")
        }}
      >
        Save
      </button>
    </>
  );
};

export default Admin;
