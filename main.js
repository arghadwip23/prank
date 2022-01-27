console.log('Hello World!');
var vid = document.getElementById("vid");
document.addEventListener("click", ()=>{
  vid.muted = vid.unmuted;
})