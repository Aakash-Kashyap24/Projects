
// const music=new Audio[('sounds/tom-1.mp3','sounds/tom-1.mp3','sounds/tom-1.mp3','sounds/tom-1.mp3','sounds/tom-1.mp3','sounds/tom-1.mp3')];
// const w=new Audio('sounds/tom-1.mp3');
// const s=new Audio('sounds/tom-1.mp3');
// const d=new Audio('sounds/tom-1.mp3');;
// const j=new Audio('sounds/tom-1.mp3');;
// const k=new Audio('sounds/tom-1.mp3');;
// const l=new Audio('sounds/tom-1.mp3');;
// const m=new Audio('sounds/tom-1.mp3');;
//
// document.querySelectorAll("button)[1].setAttribute("src", randomImageSource2);
var length=document.querySelectorAll(".drum").length;
// function playMusic(url){
//   new Audio(url).play();
//
// }

for (var i=0;i<length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
   var html=this.innerHTML;
sounds(html);


});

}
document.addEventListener("keypress",function(event){
  sounds(event.key);
});




function sounds(key){



  switch(key){
    case "w":
    var tom1=  new Audio('sounds/tom-1.mp3');
    tom1.play();
    break;

    case "a":
    var tom2=  new Audio('sounds/tom-2.mp3');
    tom2.play();
    break;

    case "s":
    var tom3=  new Audio('sounds/tom-3.mp3');
    tom3.play();
    break;

    case "d":
    var tom4=  new Audio('sounds/tom-4.mp3');
    tom4.play();
    break;

    case "j":
    var tom5=  new Audio('sounds/snare.mp3');
    tom5.play();
    break;
    case "k":
    var tom6=  new Audio('sounds/crash.mp3');
    tom6.play();
    break;
    case "l":
    var tom7=  new Audio('sounds/kick-bass.mp3');
    tom7.play();
    break;

    default: console.log(key);

  }
}
// var index=0;
// change();
//   function change(){
//     document.body.style.backgroundColor = 'red';
//
//   }
// }

// function do(){
//   new Audio('sounds/tom-1.mp3');
// }
