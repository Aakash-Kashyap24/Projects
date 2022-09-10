
function showImage(){
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}

}
//
//
//
//
//
//
//
//
//
//
//
//
// const pics=['images/1.png','images/2.png','images/3.png','images/4.png','images/5.png','images/6.png'];
// var img;
// var img1;
// function showImage() {
//   var a=Math.floor(Math.random()*pics.length);
//   var b=Math.floor(Math.random()*pics.length);
//
//   img=pics[a];
//   img1=pics[b];
//   var image1 = document.querySelectorAll("img")[0];
//   image1.setAttribute("src",img);
//   var image2 = document.querySelectorAll("img")[1];
//   image2.setAttribute("src",img1);
//   // document.getElemntById('fst').src='./images/${img}'
//   // document.getElemntById('sct').src='./images/${img1}'
// if(a>b){
//   document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
//
// }
// else if(a==b){
//   document.querySelector(h1).innerHTML = "🚩 Tie!"
// }
// else document.querySelector(h1).innerHTML = "🚩 Play 2 Wins!"
//   // pic.style.backgroundImage =img;
// }

// function winner(){
//   var key={}
//
// }
// setInterval(showImage, 1000);
