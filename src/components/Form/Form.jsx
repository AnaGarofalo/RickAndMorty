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
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input className={errors.username? style.inputError: style.input} type="text" name="username" value={userData.username}  onChange={handleChange}></input>
                    <p className={style.textoError}>{errors.username}</p>
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input className={errors.password? style.inputError: style.input} type="password" name="password" value={userData.password} onChange={handleChange} ></input>
                    <p className={style.textoError}>{errors.password}</p>
                </div>
                <button className={style.boton} type="submit">LOGIN</button>
            </form>
        </div>

        )
    }

export default Form;