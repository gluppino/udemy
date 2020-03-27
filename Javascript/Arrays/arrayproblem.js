// alert("connected!");

// printReverse(). Function takes single arguement. Prints array in reverse line by line

function printReverse(arr) {
    for (var i = arr.length - 1; i >= 0; i--){
        console.log(arr[i]);
    }
}

printReverse([1,2,3,4,5])
// isUniform(). Function takes single arguement. Works through array to find identical for true otherwise returns false.

function isUniform(arr) {
    let first = arr[0];
    for (var i = 1; i < arr.length; i++){
        if (arr[i] !== first) {
            return false;
        }
    }
    return true;
}

// sumArray(). Function takes array into arguement. Will return total of the array

function sumArray(arr) {
    var total = 0;
    arr.forEach(function(element){
        total += element;
    });
    return total;
}

// max(). Returns max number in the array

function max(arr) {
    var item = arr[0];
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] > item){
            item = arr[i];
        }
    }
    return max;
}