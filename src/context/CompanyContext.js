import { createContext, useState, useContext } from "react"

const CompanyContext = createContext()

const useCompanyContext = () => useContext(CompanyContext)

const CompanyContextProvider = ({children}) => {
    const [companyInfo, setCompanyInfo] = useState({ customers: 50000, name: "Unicorns Inc" })

    return (
        <CompanyContext.Provider value={{companyInfo, setCompanyInfo}}>
            {children}
        </CompanyContext.Provider>
    )
}

export { CompanyContextProvider, useCompanyContext }