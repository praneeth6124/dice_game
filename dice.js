let randomnumber1=Math.floor(Math.random()*6)+1;
let randomDiceImage="dice"+randomnumber1+".png";
let randomImageSource="images/"+randomDiceImage;
let image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);



let randomnumber2=Math.floor(Math.random()*6)+1;
let randomImageSource2="images/dice"+randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);


if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerText="✌️🚩 PLAYER 1 WON!";
}
else if(randomnumber2>randomnumber1){
    document.querySelector("h1").innerText="✌️🚩PLAYER 2 WON!";
}
else{
    document.querySelector("h1").innerText="🏳️DRAW!";
}


   
