var number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
var names = ["ramesh", "sathish", "karthi", "sakthi"];

number.forEach(function(names){
    if(names % 5 === 0) {
        console.log(names);
    }
});