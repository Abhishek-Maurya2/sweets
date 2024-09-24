import React from "react";
import useThemeStore from "./store/useThemeStore";
import { Switch } from "./components/ui/switch";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <Button size="icon" variant="outline" onClick={toggleTheme}>
      {theme === "light" ? <Moon /> : <Sun />}
    </Button>
  );
};

export default ThemeToggleButton;
