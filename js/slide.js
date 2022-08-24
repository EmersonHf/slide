export default class Slide {
    constructor(wrapper, slide){
        this.slide = document.querySelector(slide);
        this.wrapper = document.querySelector(wrapper);
    }
onStart(event){
    event.preventDefault(); 
    this.wrapper.addEventListener('mousemove', this.onMove);
console.log('mousedown');
}
onMove(event){
}

onEnd(event){
    this.wrapper.removeEventListener('mousemove', this.onMove)

}

addSlideEvents(){
    this.wrapper.addEventListener('mousedown', this.onStart);
  this.wrapper.addEventListener('mouseup', this.onEnd);

}

bindEvents(){
    this.onStart = this.onStart.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.onMove = this.onMove.bind(this);
}
init(){
    this.bindEvents();
    this.addSlideEvents();
return this;
}
}