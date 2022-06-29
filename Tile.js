export default class Tile  {
  #tileElement
  #x
  #y
  #value

  constructor(tileContainer, value = Math.random() > .5 ? 2 : 4) {
    this.#tileElement = document.createElement("div")
    this.#tileElement.classList.add("tile")
    tileContainer.append(this.#tileElement)
    this.value = value
  }

  get value(){
    return this.#value
  }

  set value (v) {
    this.#value = v
    this.#tileElement.textContent = v
    const backgroundLightness = setLightness(v)
    const textLightness =  setTextLightness(v)
    this.#tileElement.style.setProperty("color",textLightness)
    this.#tileElement.style.setProperty("background-color",backgroundLightness)
  }

  set x (value) {
    this.#x = value
    this.#tileElement.style.setProperty("--x",value)
  }

  set y (value) {
    this.#y = value
    this.#tileElement.style.setProperty("--y",value)
  }

  remove() {
    this.#tileElement.remove()
  }

  waitForTransition(animation = false) {
    return new Promise(resolve => {
      this.#tileElement.addEventListener(animation ? "animationend" : "transitionend", resolve, { once : true })
    })
  }
}

function setLightness(val) {

  switch (val) {
   case 2: 
       return "hsl(32, 31%, 89%)"
   case 4:
       return "hsl(39, 42%, 87%)" 
   case 8:
       return "hsl(28, 69%, 72%)" 
   case 16:
       return "hsl(20, 73%, 68%)" 
   case 32:
       return "hsl(11, 72%, 67%)" 
   case 64:
       return "hsl(11, 74%, 61%)" 
   case 128:
       return "hsl(45, 66%, 76%)" 
   case 256:
       return "hsl(46, 67%, 74%)" 
   case 512:
       return "hsl(47, 81%, 69%)" 
   case 1024:
       return "hsl(46, 71%, 69%)" 
   case 2048:
       return "hsl(48, 76%, 58%)" 
   case 4096:
       return "hsl(52, 7%, 22%)" 
   default:
       return "hsl(0, 0%, 0%)" 
  }
 
 }

 function setTextLightness(val) {
    switch(val){
      case 2: 
      case 4:
       return "hsl(32, 7%, 43%)" 
      case 8:
       return "hsl(0, 0%, 100%)" 
    }
 }