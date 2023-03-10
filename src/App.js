import Home from "./components/Home/Home"
import Nav from './components/Nav/Nav.jsx'
import About from "./components/About/About"
import Detail from "./components/Detail/Detail"
import Form from "./components/Form/Form"
import Error from "./components/Error/Error"
import {Routes, Route, useLocation, useNavigate} from "react-router-dom"
import {useState, useEffect} from 'react'

import style from "./App.module.css"

function App () {

  const [characters, setCharacters]=useState([])
  const [access, setAccess]=useState(false)
  const username= "usuariofalso@gmail.com"
  const password= "tuki123"

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
  const location=useLocation();
  const navigate = useNavigate();

  function login (userData){
    if (userData.username===username && userData.password===password) setAccess(true)
    navigate("./home")
  }

  useEffect(() => {
    !access && navigate('/');
 }, [access]);

  function logout(){
    navigate("/");
    setAccess(false);
  }
  
  

  return (
    <div className={style.App}>

      {location.pathname!=="/"? <Nav onSearch={onSearch} characters={characters} logout={logout}/> :"" }
      
      <Routes>
        <Route path="/" element={<Form login={login}/>}/>
        <Route path="/home" element={<Home characters={characters} onClose={onClose}/>}></Route>
        <Route path="/about" element={<About/>}/>
        <Route path="/detail/:detailId" element={<Detail/>}/>   
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  )
}

export default App
