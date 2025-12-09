import { createContext, useContext, useState } from "react";

type SettingsContextType = {
  city: string;
  setCity: (value: string) => void;

  unit: "C" | "F";
  setUnit: (value: "C" | "F") => void;

  theme: "light" | "dark";
  setTheme: (value: "light" | "dark") => void;

  fontSize: "small" | "medium" | "large";
  setFontSize: (value: "small" | "medium" | "large") => void;
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [city, setCity] = useState("Calgary");
  const [unit, setUnit] = useState<"C" | "F">("C");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [fontSize, setFontSize] = useState<"small" | "medium" | "large">("medium");

  return (
    <SettingsContext.Provider
      value={{ city, setCity, unit, setUnit, theme, setTheme, fontSize, setFontSize }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) throw new Error("useSettings must be used inside <SettingsProvider>");
  return context;
}
