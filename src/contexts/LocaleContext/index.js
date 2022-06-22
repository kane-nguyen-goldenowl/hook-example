import React from "react";
import {
  useMemo,
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

  const value = useMemo(
    () => ({ locale, setLocale }),
    [locale]
  );

  return (
    <LocaleContext.Provider value={{ locales, ...value }}>
      {children}
    </LocaleContext.Provider>
  )
}

export default LocaleContext;