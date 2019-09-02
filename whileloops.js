alert("counting start");
console.log("printing all numbers between 25 and 37");
var count = 25;

while(count < 37){
    console.log(count);
    count++;
}


console.log("printing all even numbers between 145 and 166");
var count = 145;

while(count <= 166){
    console.log(count);
    count+=2;
}


console.log("printing all odd numbers between 145 and 166");
var count = 145;

while(count <= 166){
    if (count % 2 !==0){
    console.log(count);
    }
    count+=1;
}

console.log("printing all  numbers divisible by 6 and 4 between 100 and 150");
var count = 100;

while(count <=150 ){
    if (count % 6 === 0 && count % 4 === 0){
    console.log(count);
    }
    count+=1;
}