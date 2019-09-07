//printReverse
function printReverse(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
printReverse(["a", "d", "e"]);
printReverse([5, 4, 8, 0, 5]);
printReverse(["go", "jumb", "fight"]);

// isUniform
function isUniform(arr) {
    var first = arr[0];
    for (var i = 1; i < arr.lenghth; i++) {
        if (arr[i] !== first) {
            return false;
        }
    }
    return true;
}
//sumArray
function sumArray(arr){
    var add = 0;
    arr.forEach(function(element){
        add += element;
    });
    return add;
}
//max()
function max(arr){
    var max = arr[0];
    for(var i =1;i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}