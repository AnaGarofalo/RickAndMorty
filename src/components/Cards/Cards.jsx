import Card from '../Card/Card';
import style from "./Cards.module.css"

export default function Cards(props) {
   const { characters} = props;
   const {onClose}=props
   return (
      <div className={style.container}>
         {characters.map((character)=>{
            return <Card 
               image={character.image}
               name={character.name}
               species={character.species} 
               gender={character.gender}
               onClose={onClose}
               id={character.id}
               />
         })}
      </div>
   );
}
