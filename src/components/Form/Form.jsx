import style from "./Form.module.css"
import {useState} from "react"
import {validarUsername, validarPassword} from "./validation"

function Form(props){
    
    const [userData, setUserData]=useState({
        username:"",
        password:""
    })

    const [errors, setErrors]=useState({
        username:"",
        password:"",
    })
    
    const handleChange=(event)=>{
        const property=event.target.name;
        const value=event.target.value;
        setUserData({...userData, [property]:value})
        if (property==="username") validarUsername({...userData, [property]:value}, setErrors, errors)
        if (property==="password") validarPassword({...userData, [property]:value}, setErrors, errors)
        
    }

    function handleSubmit(event){
        event.preventDefault()
        props.login(userData)
    }

    
    return (
        
        <div className={style.container}>
            <form>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input type="text" name="username" value={userData.username}  onChange={handleChange}></input>
                    <p>{errors.username}</p>
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" value={userData.password} onChange={handleChange} ></input>
                    <p>{errors.password}</p>
                </div>
                <button className={style.boton} onClick={handleSubmit}>LOGIN</button>
            </form>
        </div>

        )
    }

export default Form;