import Home from "./components/Home/Home"
import Nav from './components/Nav/Nav.jsx'
import About from "./components/About/About"
import Detail from "./components/Detail/Detail"
import Error from "./components/Error/Error"
import {Routes, Route} from "react-router-dom"
import {useState} from 'react'

import style from "./App.module.css"

function App () {

  const [characters, setCharacters]=useState([])

  const API_KEY="a11cbc2bde88.6dfbabdf8cc35a428432"
  const URL_BASE="https://be-a-rym.up.railway.app/api"

  const onSearch=(id)=>{
    fetch(`${URL_BASE}/character/${id}?key=${API_KEY}`)
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
      
      <Routes>
        <Route path="/home" element={<Home characters={characters} onClose={onClose}/>}></Route>
        <Route path="/about" element={<About/>}/>
        <Route path="/detail/:detailId" element={<Detail/>}/>   
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  )
}

export default App
