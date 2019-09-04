var num = 5;
function scope(){
    num +=2;
    if(num % 4 === 0) {
        return true
    } else {
        return false
    }
}
num +=1;
scope()


function mobile(){
    var name ="redme";
    console.log(name);
}
mobile()

function telephone(){
    console.log(name);
}
telephone()