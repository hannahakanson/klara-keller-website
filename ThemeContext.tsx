import { createContext, useContext, useState, Dispatch, SetStateAction } from "react";

export interface ThemeContextProps {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
  sideA: boolean;
  setSideA: Dispatch<SetStateAction<boolean>>;
}


const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const useThemeContext = () => {
  return useContext(ThemeContext);
};

const ThemeContextProvider = ({ children } : any) => {
  const [theme, setTheme] = useState("dark");
  const [sideA, setSideA] = useState(true);

  return (
    <ThemeContext.Provider value={{theme, setTheme, sideA, setSideA}}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider as default, useThemeContext };
