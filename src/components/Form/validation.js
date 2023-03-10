export function validarUsername (userData, setErrors, errors){
    if (userData.username==="") setErrors({...errors, username:"El usuario no puede estar en blanco"})
    else if (userData.username.length>35) setErrors({...errors, username:"El usuario no puede tener más de 35 caracteres"})
    else if (/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/.test(userData.username)) setErrors({...errors, username:""})
    else setErrors({...errors, username:"El usuario debe ser un correo electrónico"})
    return setErrors
}

export function validarPassword (userData, setErrors, errors){
    if (userData.password.length<6) setErrors({...errors, password:"La contraseña debe contener más de 6 caracteres"})
    else if (userData.password.length>10) setErrors({...errors, password:"La contraseña debe contener menos de 10 caracteres"})
    else if ((userData.password.match(/\d/))) setErrors({...errors, password:""})
    else setErrors({...errors, password:"La contraseña debe contener al menos 1 número"})
    return setErrors
}

