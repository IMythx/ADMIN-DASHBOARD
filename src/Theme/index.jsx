import { createContext, useState } from "react";

export const ThemeContext = createContext({
  toggleTheme: () => {},
  darkTheme: true,
});

const ThemeCtxProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);
  const darkThemeChangeHandler = () => {
    setDarkTheme((prev) => !prev);
  };
  return (
    <ThemeContext.Provider
      value={{
        toggleTheme: darkThemeChangeHandler,
        darkTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeCtxProvider;
