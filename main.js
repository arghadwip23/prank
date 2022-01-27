console.log('Hello World!');
var audio = document.getElementById("aud");
var pageS = document.getElementById("page2");
var pageF = document.getElementById("page1");
var options = {
  strings: ['Hey, there is a surprise for you my friend, just touch the screen'],
  typeSpeed: 70,
  showCursor:false
};

var typed = new Typed('.element', options);

pageF.addEventListener("click", ()=>{
   pageF.style.display = "none";
   pageS.style.display = "flex";
   audio.play();
   console.log(audio.volume);
});
