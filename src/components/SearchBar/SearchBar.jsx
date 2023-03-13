import style from "./SearchBar.module.css"
import {useState} from 'react'

export default function SearchBar(props) {
   const [id, setId]= useState("")
   const handleChange=(event)=>{
      setId(event.target.value,()=>{event.target.value=id})
   }

   const handleClick=()=>{
      // probar
      if(!props.characters.find((character)=>character.id==id)) props.onSearch(id)
      else window.alert("Ya hay un personaje con esa id")
      setId("")

   }
   const handleClickRandom=()=>{
      const random=Math.floor(Math.random() * 826)
      if(!props.characters.find((character)=>character.id==random)) props.onSearch(random)
      else window.alert("Ya hay un personaje con esa id")

   }

   return (
      <div className={style.container}>
         <div className={style.miniContainer}>
            <input className={style.input} type='search' onChange={handleChange}  value={id} />
            <button className={style.boton} onClick={handleClick}>Agregar</button>
         </div>
         <button className={style.botonRandom} onClick={handleClickRandom}>Agregar aleatorio</button>
         
      </div>
   );
}
