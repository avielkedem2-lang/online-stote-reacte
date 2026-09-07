import { Outlet } from "react-router";
import Header from "../Header/Header";
import "./layout.css"
import { ThemeContext } from "../context/ThemeContext";
import { useContext, useState } from "react";

export default function Layout() {

  const [status, setTheme] = useState("light")
  const setStatus = () => setTheme(val => val === "light" ? "dark" : 'light')
  
  return (
    <ThemeContext.Provider value={{status, setStatus}}>
      <div className={status}>
        <Header />
        <Outlet />
      </div>
    </ThemeContext.Provider>
  )
}
