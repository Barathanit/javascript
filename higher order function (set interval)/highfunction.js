function fun(){
    console.log("v kohli is played very well");
    console.log("s smith is playing very well");
} 
fun()
setInterval(fun, 1000);

setInterval (function(){
    console.log("v kohli is played very well");
    console.log("s smith is playing very well");
}, 2000);