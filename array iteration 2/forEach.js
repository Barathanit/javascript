var mobile = ["readme", "lenovo", "nokia", "apple", "realme",];
console.log(mobile)
mobile.forEach(function(){
    console.log("mobile brands");
});

mobile.forEach(function(hi){
    console.log("mobie brands " + hi);
});

function printName(name){
 console.log("$$$$$$$$$$$");
 console.log(name);
 console.log("$$$$$$$$$$$");
}
printName ("sampath")
mobile.forEach(printName);
printName("apple");
printName(mobile[2]);
printName(mobile[0]);