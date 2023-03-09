import style from "./Card.module.css"
import {Link} from 'react-router-dom'

export default function Card(props) {
   function handleClick(){
      props.onClose(props.id);
   }
   return (
      
      <div className={style.container}>
         <button className={style.boton} onClick={handleClick}>X</button>
         <img  src={props.image} alt="" />
         <Link to={`/detail/${props.id}`}>
            <h2 className={style.nombre}>{props.name}</h2>
         </Link>
         <div className={style.detalles}>
            <div>
               <h4>{props.species}</h4>
            </div>
            <div>
               <h4>{props.gender}</h4>
            </div>
         </div>
      </div>
      
   );
}
