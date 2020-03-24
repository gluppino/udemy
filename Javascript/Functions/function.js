// isEven Function 

function isEven(num) {
    if (num % 2 === 0) {
        return "True"
    };

    return "False";
}  

function factorial(num) {
    // define a result vairable
    var result = 1;
    // calculate factorial and store value in result
    for (var i = 2; i <= num; i++) {
        result *= i;
    }
    // return the result variable
    return result;

}


function kebabToSnake(str) {
    // replace all "-" with "_"
    var newStr = str.replace(/-/g , "_")
    // retrun str
    return newStr;
}