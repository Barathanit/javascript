console.log("print  all numbers between 789 and 801")

for(var i = 789; i <= 801; i++){
  console.log(i); 
}
console.log("print all even numbers between 58 and 79")

for(var i = 58; i <= 79; i+=2){
  console.log(i);
}
console.log("print all odd numbers between 14 and 27")

for(var i = 14; i <=27; i++){
  if(i % 2 !=0){
    console.log(i);
  }
}

console.log("print")

for(var i = 30; i <= 70; i++){
  if(i % 8 === 0 && i % 5 === 0) {
    console.log(i);
}
}
