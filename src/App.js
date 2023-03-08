import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import {useState} from 'react'

import style from "./App.module.css"

function App () {

  const [characters, setCharacters]=useState([])

  const onSearch=(id)=>{
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
  }

  const onClose=(id)=>{
    setCharacters(characters.filter((character)=>character.id!==id))

  }
  

  return (
    <div className={style.App}>
      
      <Nav onSearch={onSearch} characters={characters}/>
      {/* <hr color="transparent"/> */}
      <div>
        <Cards
          characters={characters}
          onClose={onClose}
        />
      </div>
      <hr color="transparent"/>
    </div>
  )
}

export default App
