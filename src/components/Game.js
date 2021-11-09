import Card from "./Card";
import react, {useState} from "react";
import { cardsData } from "../cards";


function Game() {
  
  const[cards, setCards] = useState(cardsData.map((card) => ({
    ...card,
    isButtonDisabled: false,
  })));
  const[flipped, setFlipped] = useState();

  //function flip
  function Flip(card){
    if(!card.isButtonDisabled){
      let id = card.id;

      setCards(cards.map((card) => card.id === id ? {...card, isFlipped: true}: card))  
      if(flipped == null){
        setFlipped(card)
      }
      else{
        if(card.name == flipped.name && card.id != flipped.id){
          setFlipped(null)
        }
        else if(card.name != flipped.name){
          setTimeout(() => {
            setCards(cards.map((card) => card.id === id ? {...card, isFlipped: false}: card));
            setCards(cards.map((card) => card.id === flipped.id ? {...card, isFlipped: false}: card));
            setFlipped(null);
           } , 500)
          
        }        
      }
    
    }
  }

  return (
    <section className="memory-game">
      {cards.map((card) => ( 
         <Card key = {card.id} card={card} onClick={Flip} /> 
      ))}
    </section>
  );
}

export default Game;

