import Card from '../Card/Card';
import style from "./Cards.module.css"

export default function Cards(props) {
   const { characters} = props;
   const {onClose}=props
   
   return (
      <div className={style.container}>
         {characters.map(({image, name, species, gender, id})=>{
            return <Card 
               key={id}
               image={image}
               name={name}
               species={species} 
               gender={gender}
               onClose={onClose}
               id={id}
               />
         })}
      </div>
   );
}
