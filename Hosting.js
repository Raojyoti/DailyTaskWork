/* What is hosting?
-------------------
=> Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).
 */

//Example:- Hosting with var variable
console.log(a)//call
var a=7;// declaration and Initialisation/Assignment 

//output:- undefined


/* above example looked when hosting:-
----------------------------------------*/
var a;
console.log(a)
a=7;
//output:- undefined


/*
let’s take a look at how hoisting happens for function and variable (var, let and const) declarations:-
--------------------------------------------------------------------------------------------------------
*/
//Example:-
 sayHello()
 function sayHello(){
    console.log("Good Morning!")
 }
//output:- Good Morning!

//above example looked when hosting:- they put declarations of function in top cut scope like that
//----------------------------------------------------------------------------------------------------
function sayHello(){
    console.log("Good Morning!")
 }
sayHello()
//output:- Good Morning!

/*So the lexical environment for the above code will look something like this:
-------------------------------------------------------------------------------
lexicalEnvironment = {
  helloWorld: < func >
} */

/*What is a Lexical Environment?:-
----------------------------------
=> A lexical environment is a data structure that holds identifier-variable mapping. 
=> (here identifier refers to the name of variables/functions, 
=> and the variable is the reference to actual object [including function object] or primitive value).
=> a lexical environment is a place where variables and functions live during the program execution. 

This is what a lexical environment conceptually look like:-
-------------------------------------------------------------
LexicalEnvironment = {
  Identifier:  <value>,
  Identifier:  <function object>
}
*/

/*Hoisting Function Expressions:-
---------------------------------
=> Only function declarations are hoisted in JavaScript, function expressions are not hoisted. For example: this code won’t work. */
// example:-
//----------

helloWorld();  // TypeError: helloWorld is not a function
var helloWorld = function(){
  console.log('Hello World!');
}
//output:- TypeError: helloWorld is not a function
/*
=> As JavaScript only hoist declarations, not initializations (assignments), 
=> so the helloWorld will be treated as a variable, not as a function. Because helloWorld is a var variable, 
=> so the engine will assign is the undefined value during hoisting.
 */

/*So this code will work
----------------------- */
var helloWorld = function(){
    console.log('Hello World!');  //prints 'Hello World!'
  }
  helloWorld();

  /*
  Hoisting let and const variables:
  ---------------------------------
  example:-
  --------- */
  console.log(x)
  let x=5;
  //output:- ReferenceError: Cannot access 'x' before initialization

//above example looked when hosting:- they put declarations of function in top cut scope like that
//----------------------------------------------------------------------------------------------------
 /*let x;
 // x= undefined because in let variable hosting but initialization is no do
console.log(x)
  x=5;*/

  /*
   why let and const are hoisted but not initialized?
    -------------------------------------------------
    => because such variables are in a temporal dead zone(TDZ)
    => (TDZ) is the area of a block where a variable is inaccessible until the moment the computer completely initializes it with a value.
    => A time span between variable creation and its initialization where they can’t be accessed.
   */
  //example:-
  
  let a;
  console.log(a); 
  a = 5;

  // outputs:- undefined

  /**
   the lexical environment will look like this:-
   --------------------------------------------
  lexicalEnvironment = {
  a: undefined
}
   */

//example:-
//----------------
function mnp(){
  console.log(k)
}
mnp()
var k="hii"
//output:undefined

/*above example looked when hosting:- they put declarations of function in top cut scope like that
----------------------------------------------------------------------------------------------------
var k 
function mnp(){
  console.log(k)
}
mnp()
k="hii"
//output:undefined*/

/*Example
--------- */
function mnp(){
  console.log(p)
}
mnp()
let p="hii"
//output:ReferenceError: Cannot access 'p' before initialization

/*above example looked when hosting:- they put declarations of function in top cut scope like that
----------------------------------------------------------------------------------------------------
let p;
function mnp(){
  console.log(p)
}
mnp()
 p="hii"
//output:ReferenceError: Cannot access 'p' before initialization*/
