import React from "react";
import { NavLink } from "react-router-dom";
import logoIcon from "@/assets/img/logo.svg";
import searchIcon from "../../assets/img/search.svg";

const Navbar = ()=>{
 const links = [
  { title: "Главная", url: "/" },
  { title: "Фильмы", url: "movie" },
  { title: "Сериалы", url: "tv" },
 ]
 return ( 
  <header className="header">
    <nav className="header__nav container">
      <NavLink to="/">
        <img src={logoIcon} alt="" />
      </NavLink>
      <button className="header__burger">
        +
      </button>
      <ul className="header__menu">
        {links.map((elem)=>(
          <li key={elem.url}>
            <NavLink to={elem.url} className={({isActive})=> isActive ? "header__link active" : "header__link"}>{elem.title}</NavLink>
          </li>
        ))}
        <li>
          <NavLink to="search" className={({isActive})=> isActive ? "header__link active" : "header__link"}>
            <img src={searchIcon} alt="" />
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
)}

export default Navbar;