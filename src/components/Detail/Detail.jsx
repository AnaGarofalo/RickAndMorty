import {useParams} from "react-router-dom"
import { useEffect, useState } from "react"
import style from './Detail.module.css'

const Detail=()=>{
    
    const [character, setCharacter]=useState({})    
    const {detailId}=useParams()

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);
     
      // console.log(character.origin?value:"")
    return(
        <div className={style.container}>
            <div className={style.propiedades}>
                <h1>Nombre: {character.name}</h1>
                <h3>Estado: {character.status}</h3>
                <h3>Especie: {character.species}</h3>
                <h3>Género: {character.gender}</h3>
                <h3>Origen: {character.origin?character.origin.name:""}</h3>
            </div>
            <img src={character.image}/>
        </div>
    )
}
export default Detail

