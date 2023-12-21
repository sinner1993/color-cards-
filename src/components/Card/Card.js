import "./Card.scss"
import { quoteSelector } from "../../functions/quoteSelector";
import { useState, useEffect } from "react";

const Card = ()=>{
 const [selector, setSelector] = useState("");
 
 useEffect(()=>{
    quoteSelector(setSelector)
 },[])
    return (
        <div className = "card" id = "quote-box">
            <div className="card__margin">
            <p className="card__quote changed__color__text" id ="text"><i class="bi bi-quote"></i>{selector.quote}</p>
            <p className="card__author changed__color__text" id="author">{selector.author}</p>
            <div class="card__footer">
              <div class="card__footer__icons__wrapper">
              <a target="_blank" href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22It%E2%80%99s%20not%20the%20years%20in%20your%20life%20that%20count.%20It%E2%80%99s%20the%20life%20in%20your%20years.%22%20Abraham%20Lincoln" id ="tweet-quote">
              <i class="bi bi-twitter changed__color"></i>
              </a>  
              <a target="_blank" href="https://web.telegram.org/k/" id ="telegram-quote">          
              <i class="bi bi-telegram changed__color"></i>
              </a>
              </div>  
              <button 
              id="new-quote"
              className="card__footer__button changed__color"
              onClick={()=>quoteSelector(setSelector)}
              >
                New quote
                </button>
            </div>
            </div>
        </div>
    )
}

export default Card;