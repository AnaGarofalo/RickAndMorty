import style from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar"

export default function Nav(props){
    return (
        <div className={style.containerSearchBar}>
        <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEotjdle71Kiy6zT8SoluFcBjb49Fq3J_IOQ&usqp=CAU"/>
        <div className={style.searchBar}>
          <SearchBar onSearch={props.onSearch} characters={props.characters}/>
        </div>
      </div>
    )
}