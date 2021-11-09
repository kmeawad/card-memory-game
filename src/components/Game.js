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
          //setCards(cards.map((card) => card.id === id ? {...card, isButtonDisabled: true}: card))
          //setCards(cards.map((card) => card.id === flipped.id ? {...card, isButtonDisabled: true}: card))
          setFlipped(null)
        }
        else if(card.name != flipped.name){
          //setCards(cards.map((card)=> true? {...card, isButtonDisabled: true}: card))
          setTimeout(() => {
            setCards(cards.map((card) => card.id === id ? {...card, isFlipped: false}: card));
            setCards(cards.map((card) => card.id === flipped.id ? {...card, isFlipped: false}: card));
            setFlipped(null);
            //setCards(cards.map((card)=> card.isButtonDisabled? {...card, isButtonDisabled: false}: card));
            //setCards(cards.map((card) => (!card.isButtonDisabled)? {...card, isButtonDisabled: true}: card))
          } , 1000)
          
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

