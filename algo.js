// 412. Fizz Buzz



// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.




/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    
    let arr = []
    let res = []

    for(let i = 1; i <= n; i++){
        arr.push(i)
    }

    for(let i = 0; i < arr.length; i++){

        if(arr[i] % 3 == 0 && arr[i] % 5 == 0){
            res.push("FizzBuzz")
        }

        else if(arr[i] % 3 == 0){
            res.push("Fizz")
        }

        else if(arr[i] % 5 == 0){
            res.push("Buzz")
        }

        else{
            res.push("" + arr[i] + "")
        }
    }

    return res
};






/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    
    let res = []
    
    for(let i = 1; i <= n; i++){

        if(i % 3 == 0 && i % 5 == 0){
            res.push("FizzBuzz")
        }

        else if(i % 3 == 0){
            res.push("Fizz")
        }

        else if(i % 5 == 0){
            res.push("Buzz")
        }

        else{
            res.push("" + i + "")
        }
    }

    return res
};