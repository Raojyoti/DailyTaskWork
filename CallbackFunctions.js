/*What is callbacks:-
-------------------- 
=> A Callback is a function that you pass into another function as an argument for executing later.

/*Example of callbacks functions1 :-
-------------------------------------*/
// function
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}
// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('Jyoti', callMe);

/*output:-
-----------
Hii Jyoti
I am callback function */

 
/*Example:-2
  ----------- */

  function sayHello(){
    console.log("Sum of two number => ")
}
function sayHii(){
    let x=10;
    let y=20;
    let opt=x * y
    console.log("Product of two number => ", opt)
    
}

function add(a, b, callback){
    setTimeout(() =>console.log(a + b), 1000);
    callback();
}
add(10,20,sayHello);
add(5, 10, sayHii)

/*output:-
-----------
Sum of two number => 
Product of two number =>  200
30
15
*/

/*Example:-3
------------ */
function values(){
    console.log("Print array value:-")
}
function elements(callback){
    const arrElement=[10, 20, 300, 14, 11];
    let maxValue=Math.max.apply(null, arrElement)
    console.log("Maximum value ==>  "+maxValue)
    callback();
}
elements(values);
elements(function (){
    const geture = ["Goodday", "Bye", "Hello", "Hii"];
    console.log(geture);
    geture.sort();
    console.log(geture);
});
/*Output:-
-----------
Maximum value ==>  300
Print array value:-   
Maximum value ==>  300
[ 'Goodday', 'Bye', 'Hello', 'Hii' ]
[ 'Bye', 'Goodday', 'Hello', 'Hii' ] */

/*Example:-4
------------ */
function mainFunction(callback) {
    console.log("Performing operation...");
    setTimeout(function() {
        callback("Operation complete");
    }, 1000);
    }
    function callbackFunction(result) {
    console.log("Result: " + result);
    }
mainFunction(callbackFunction);
    
/*Output:-
----------
Performing operation...
Result: Operation complete
 */

/*Example5:-
------------ */

const cityName= ["Noida", "Delhi", "Pune", "Mumbai"]
let string="";
function reverseCityName(){
    let city= cityName.reverse();
    console.log(city);
}
function pattern(){
    for(let i=1; i<=5; i++){
        for(let j=1; j<=i; j++){
            string=string+ "*";
        }
        string=string+ "\n";
    }
    console.log(string)
}
function merge(callback){
    arr1= [10, 25, 8, 5, 2, 9]
    arr2= ["hii", "hello", "bye", "goodday", "bad"]
    let mergeValues= arr1.concat(arr2);
    console.log(mergeValues);
    callback();
}
merge(pattern);
merge(reverseCityName);

/*Output:-
----------
[
  10,    25,       
  8,     5,        
  2,     9,        
  'hii', 'hello',  
  'bye', 'goodday',
  'bad'
]
*
**
***
****
*****

[
  10,    25,
  8,     5,
  2,     9,
  'hii', 'hello',
  'bye', 'goodday',
  'bad'
]
[ 'Mumbai', 'Pune', 'Delhi', 'Noida' ]
 */

/*Callback hell:-
----------------- 
=> Callback hell is a phenomenon that happens when multiple callbacks are nested on top of each other.
=> The two common ways of escaping the callback hell are by using promises and async/await. 
=> Promises mainly have three stages such as resolved, rejected, and pending. It makes the code more maintainable and understandable.*/

/*Example1:-
-------------- */
function callbackHell(a, b){
    setTimeout( () => {
      let sum= a+b;
      console.log("Sum of two numbers ==>  ", sum)
      setTimeout( () => {
        let sub= a - b;
      console.log("Substraction of two numbers ==>  ", sub)
        setTimeout(() => {
            let product= a * b;
            console.log("Product of two numbers ==>  ", product)
        }, 2000)
      },2000);
    },2000);
   }
  
   callbackHell(50,20);