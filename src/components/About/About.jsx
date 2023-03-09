import style from "./About.module.css"

const About=()=>{
    return(
        <div className={style.container}>
            <div>
                <h1>Nombre: Ana Garófalo</h1>
                <h3>Estado: Cursando</h3>
                <h3>Especie: Humana</h3>
                <h3>Género: Femenino</h3>
                <h3>Origen: Planeta Henry</h3>
            </div>
        </div>
    )
}
export default About