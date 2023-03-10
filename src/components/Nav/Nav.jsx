import style from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar"
import {NavLink} from "react-router-dom"

export default function Nav(props){
  console.log(props)
    return (
      <div className={style.container}>
        <div className={style.containerBotones}> 
          <NavLink to="/home">
            <button className={style.boton}>Home</button>
          </NavLink>
          <NavLink to="/about">
            <button className={style.boton}>About</button>
          </NavLink>
        <button className={style.boton} onClick={props.logout}>Logout</button>
        </div>
        <div className={style.containerSearchBar}>
          <SearchBar onSearch={props.onSearch} characters={props.characters}/>
        </div>
      </div>
    )
}