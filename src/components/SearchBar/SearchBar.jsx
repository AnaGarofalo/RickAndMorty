import style from "./SearchBar.module.css"
import {useState} from 'react'

export default function SearchBar(props) {
   const [id, setId]= useState("")
   const handleChange=(event)=>{
      setId(event.target.value)
   }

   const handleClick=()=>{
      if(!props.characters.filter((character)=>character.id==id).length) props.onSearch(id)
   }
   const handleClickRandom=()=>{
      const random=Math.floor(Math.random() * 826)
      if(!props.characters.filter((character)=>character.id==random).length) props.onSearch(random)

   }

   return (
      <div className={style.container}>
         <div className={style.miniContainer}>
            <input className={style.input} type='search' onChange={handleChange}  />
            <button className={style.boton} onClick={handleClick}>Agregar</button>
         </div>
         <button className={style.botonRandom} onClick={handleClickRandom}>Agregar aleatorio</button>
         
      </div>
   );
}
