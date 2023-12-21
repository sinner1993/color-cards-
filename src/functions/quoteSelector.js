import { QUOTES } from "../business/quotes"
const colorMaker = (changed__color, changed__color__text, a)=>{
const arr = []
  for(let i = 0; i < 3; i++){
    arr.push(Math.floor(Math.random() * 255))
  }
  Array.from(changed__color).forEach(el=>{ 
    el.style.backgroundColor = `rgb(${arr.join(",")})`
    el.style.transition = "2s";
})
Array.from(a).forEach(el=>{ 
  el.style.backgroundColor = `rgb(${arr.join(",")})`
  el.style.transition = "2s";
})
  Array.from(changed__color__text).forEach(el=> { 
    el.style.transition = "2s";
    el.style.color = `rgb(${arr.join(",")})`
})
}

export const  quoteSelector = (setSelector)=>{
  const rndIndex = Math.floor(Math.random() * 4 + 1)
  const quoteCcs = document.getElementById("text");
  const author = document.getElementById("author");
  const changedColor = document.getElementsByClassName("changed__color");
  const changedColorText = document.getElementsByClassName("changed__color__text");
  const a = document.getElementsByTagName("a");

  setTimeout(()=> {
    quoteCcs.style.animation = "fadeIn 2s" 
    colorMaker(changedColor, changedColorText, a)
    author.style.animation = "fadeIn 2s" 
     setSelector(QUOTES[rndIndex]);}
  , 200)
       quoteCcs.style.animation = "";
       author.style.animation = "";
        }