import React from 'react';
import { useCompanyContext } from "./context/CompanyContext"

const Welcome = () => {
   const { companyInfo: { customers, name } }  = useCompanyContext()
    return ( 
        <>
        <p>Welcome to {name}! { customers } customers served daily!</p>
        </>
     );
}
 
export default Welcome;