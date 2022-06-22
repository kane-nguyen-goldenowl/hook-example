import React from "react";
import {
  useState
} from 'react';

const LocaleContext = React.createContext({
  locales: [],
  locale: "",
  setLocale: () => { },
});

export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState("VN");
  const locales = ["VN", "EN"];

  const value = {
    locales,
    locale,
    setLocale
  }

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  )
}

export default LocaleContext;