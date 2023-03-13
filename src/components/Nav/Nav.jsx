import style from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar"
import {NavLink} from "react-router-dom"

export default function Nav(props){
  
    return (
      <div className={style.container}>
        <div className={style.containerBotones}> 
          <NavLink to="/home" className={({ isActive }) =>
                isActive ? style.active : style.boton
              }><p>Home</p>
          </NavLink>
          <NavLink to="/about" className={({ isActive }) =>
                isActive ? style.active : style.boton
              } > <p >About</p>
          </NavLink>
        <button className={style.botonLogout} onClick={props.logout}>Logout</button>
        </div>
        <div className={style.containerSearchBar}>
          <SearchBar onSearch={props.onSearch} characters={props.characters}/>
        </div>
      </div>
    )
}