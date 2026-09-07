import { Link } from "react-router";
import "./header.css"
import { useContext, useState } from "react";
import { useFavorite } from "../Store/storeFavorites";
import { ThemeContext } from "../context/ThemeContext";


export default function Header() {
  const {setStatus} = useContext(ThemeContext)
  // const [theme, setTheme] = useState(status)
  // const toggleTheme = () =>{
  //   setTheme(prev => prev === "light"? "dark": 'light')
  // }
  
  const favorites = useFavorite(s => s.favorites)
  const [className, setClass] = useState("button-nav link")
  const [className1, setClass1] = useState("button-nav")
  const change = () => {
    if (className === "button-nav link") {
      setClass("button-nav")
      setClass1("button-nav link")
    } else {
      setClass("button-nav link")
      setClass1("button-nav")
    }
  }
  return (
    <div className="header">
      <section>
        <h1 className="mini-shop">Mini Shop</h1>
      </section>

      <section className="buts-nav">
        <Link to={"/"}>
          <button onClick={change} className={className}>Home</button>
        </Link>
        <Link to={"/favorites"}>
          <button onClick={change} className={className1}>{`Favorites (${favorites.length})`}</button>
        </Link>
        <button  className="lights" onClick={setStatus}>◒</button>
      </section>

    </div>
  )
}
