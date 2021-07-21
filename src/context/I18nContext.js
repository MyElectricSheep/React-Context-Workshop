import { createContext, useContext, useState } from "react";

const i18n = {
  en: {
    home: {
      title: "Home Page",
    },
    welcome: {
      main: "Welcome",
      daily: "served daily",
    },
    logout: {
      button: "Logout",
      alertText: "Some logout functionality to be implemented",
    },
    admin: {
      title: "Admin Page",
      changeCustomers:
        "Change the fake numbers of customers served daily here:",
      content: "Lots of important secret stuff",
      save: "save",
    },
    about: {
      title: "About Page",
    },
    signin: {
      title: "Sign in",
      login: "Login",
      password: "Password",
      signup: "Not yet registered? Signup!",
      button: "signin",
      signupLink: "signup",
    },
    signup: {
      title: "Sign up",
      email: "Email",
      password: "Password",
      register: "Register",
      signin: "Already registered? Signin!",
      alertText: "We're sorry, this functionality is not implemented yet!",
    },
    language: {
      current: "Current language",
      change: "Change language",
    },
  },
  de: {
    home: {
      title: "Startseite",
    },
    welcome: {
      main: "Herzlich willkommen",
      daily: "täglich serviert",
    },
    logout: {
      button: "Ausloggen",
      alertText: "Einige Logout-Funktionen sollen implementiert werden",
    },
    admin: {
      title: "Admin Seite",
      changeCustomers:
        "Ändern Sie die gefälschte Anzahl der Kunden, die hier täglich bedient werden:",
      content: "Viele wichtige geheime Daten",
      save: "speichern",
    },
    about: {
      title: "Über Seite",
    },
    signin: {
      title: "Einloggen",
      login: "Anmeldung",
      password: "Passwort",
      signup: "Noch nicht registriert? Anmelden!",
      button: "einloggen",
      signupLink: "anmelden",
    },
    signup: {
      title: "Anmelden",
      email: "Email",
      password: "Passwort",
      register: "Registrieren",
      signin: "Bereits registriert? Einloggen!",
      alertText: "Diese Funktion ist leider noch nicht implementiert!",
    },
    language: {
      current: "Aktuelle Sprache",
      change: "Sprache ändern",
    },
  },
};

const i18nContext = createContext();

const useI18nContext = () => useContext(i18nContext);

const I18nContextProvider = ({ children }) => {
  const [i18nData, setI18nData] = useState(i18n["en"]);

  return (
    <i18nContext.Provider value={{ i18nData, setI18nData, i18n }}>
      {children}
    </i18nContext.Provider>
  );
};

export { I18nContextProvider, useI18nContext };
