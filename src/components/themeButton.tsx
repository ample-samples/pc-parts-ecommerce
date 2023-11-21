'use client'
import{ useTheme } from "next-themes";
import { MenubarItem } from "./ui/menubar";
import { Button } from "./ui/button";

export function ThemeButton() {
  const { theme, setTheme } = useTheme();

  const formatTheme = (theme: string) => {
    return theme.charAt(0).toUpperCase() + theme.slice(1);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
      <Button className="mr-2  w-24" onClick={toggleTheme}>{theme ? `${formatTheme(theme)} mode` : "Theme"} </Button>
  )
}

