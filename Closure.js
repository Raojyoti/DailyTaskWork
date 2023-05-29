/*Closure:-
------------- 
=> Closure means that an inner function always has access to the vars and 
=> parameters of its outer function, even after the outer function has returned. 
*/
/*Example 1:-
------------ */
function OuterFunction() {

    var outerVariable = "jyoti rao";

    function InnerFunction() {
        console.log(outerVariable);
    }
    return InnerFunction;
}
var innerFunc = OuterFunction();

innerFunc();  //jyoti rao

/*
=> In the above example, return InnerFunction; returns InnerFunction from OuterFunction when you call OuterFunction(). 
=> A variable innerFunc reference the InnerFunction() only, not the OuterFunction(). So now, when you call innerFunc(), 
=> it can still access outerVariable which is declared in OuterFunction(). This is called Closure.
 */



/*Example 2:-
-------------*/
function Counter() {
    var value = 0;
    function IncreaseCounter() {
        return value += 1;
    };
    return IncreaseCounter;
}
 var counter = Counter();

 console.log(counter()); // 1
 console.log(counter()); // 2
 console.log(counter()); // 3
 console.log(counter()); // 4

/*Example 3:-
--------------- */

function checkValue(){
    var number= 5;
    var countNum= 0;
    function findNumber(){
        for(var i=1; i<=number; i++){
            if(number % i == 0){
                countNum++;
            }
        }
        if(countNum == 2){
            return (`${number} is prime number`);
        }
        else{
            return (`${number} is not prime number`);
        }
    }
    return findNumber();
}
var resultNum= checkValue();
console.log(resultNum);

/*Example 4:-
----------- */
function CheckCounter() {
    
    var counter = 0;

    setTimeout( function () {
        var innerCounter = 0;
        counter += 1;  // 0+1 ==> 1
        console.log("First counter value ===>  " + counter + ", outerCounter = " + innerCounter);

        setTimeout( function () {
            counter += 1;    //1+1 ==> 2
            innerCounter += 1;   //0+1 ==> 1
            console.log("Second counter value ====>  " + counter + ", innerCounter = " + innerCounter)
        }, 500);

    }, 1000);
};

CheckCounter();