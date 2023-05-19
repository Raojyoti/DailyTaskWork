/*
ES6 to ES9:-
---------------*/

/*1. let  keyword:-
------------------ 
Example:-
----------*/
let x=10;
console.log(x);

/*2. const Example:-
-------------------- */
const a=[1, 2, 3, 4, 5, 6];
console.log(a[5]);

/*3. Arrow Function:-
---------------------- */
const result = (m, n) => m * n
console.log(result(5, 10));

/*4. Spread (...) operator:-
-----------------------------*/
const p=[10, 20, 30, 40];
const q=["jan", "feb", "mar", "apr"];
const pq= [...p, ...q];
console.log(pq);

/*find max value from array using spread opertor:-
--------------------------------------------------*/
const pn=[10, 20, 30, 40, 1, 2];
let maxValue= Math.max(... pn);
let minValue= Math.min(... pn);
console.log()
console.log("Max value ==>  ", maxValue);
console.log("Min value ==>  ", minValue);

/*5. for/of loop:-
------------------- */
const value=[10, 20, 30, 40, 50];
for(let digit of value){
    console.log(digit);
}

/*6. Map object:-
------------------- 
=> A Map holds key-value pairs where the keys can be any datatype.
*/
const numbers= new Map([
    ["jaipur", 200],
    ["noida", 100],
    ["delhi", 300],
    ["pune", 5000],
    ["mumbai", 6000],
]);
console.log(numbers.get("pune"));
numbers.delete("mumbai");
console.log(numbers);
console.log("SIZE OF NUMBERS ARRAY ==> ",numbers.size)
console.log("jaipur is present ===> ",numbers.has("jaipur"))
numbers.forEach(function(value, key){
    console.log(key + "  ==>  " + value);
});

/*7.Sets:-
---------- 
=> A JavaScript Set is a collection of unique values.
=> Each value can only occur once in a Set.
=> A Set can hold any value of any data type.*/

//create a set
const char= new Set();
//add value in set
char.add('a');
char.add('c');
char.add('m');
char.add('n');
char.add('y');
char.add('y');
char.add('y');
console.log(char);
console.log("Size of set ===>  ",char.size);
char.forEach(function(v) {
    console.log(v);
});

/*8. Classes:-
------------ 
Syntax:-
----------
class ClassName {
  constructor() { ... }
}*/

class details {
    constructor(name, place){
        this.name= name;
        this.place= place;
    }
}
const detailaObj1= new details("Anmol", "Noida");
const detailaObj2= new details("Riya", "Delhi");
console.log(detailaObj1.name + ",   " + detailaObj2.name);
console.log(detailaObj1.place + ",  " + detailaObj2.place);


/*9 Promise:-
---------------*/
function PromiseDemo(check){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(check){
          resolve([
            {id: 1, name: 'Riya'},
            {id: 2, name: 'Ankit'},
          ]);
        }else{
          reject("wrong details........")
        }
      }, 1000);
    })
  }
  //Pass case
  let Pass=(result)=> {
    console.log(result);
  }
  //Fail case
  let fail=(error) => {
    console.log(error);
  }
 // PromiseDemo(true).then(Pass).catch(fail);

/*11. Default Parameter Values
------------------------------*/

function myValue(x, y=10){
    console.log(x *y );
}
myValue(5,3);//15

/*12 String.includes():-
-----------------------
=> The includes() method returns true if a string contains a specified value, otherwise false
*/
let text = "Hey!, Good Morning";
let st=text.includes("morning") ;
console.log(st);

/*13. String.startsWith():-
--------------------------------
=> The startsWith() method returns true if a string begins with a specified value, otherwise false
 */
let text1 = "Hey!, Good Morning";
let st1=text1.startsWith("Hey") ;
console.log(st1);

/*14.String.endsWith():-
-------------------------- 
=> The endsWith() method returns true if a string ends with a specified value, otherwise false
*/
let text2 = "Hey!, Good Morning";
let st2=text2.endsWith("Morning") ;
console.log(st2);

/*15.Array.from():-
--------------------- */
let letter= "ABCRDUY";
let lett=Array.from(letter);
console.log(lett);

/*16.Array keys():-
------------------- */
const ch=['a', 'b', 'c','u'];
const k=ch.keys();
for(let x of k){
    console.log(x)
}

/*17. Array find():-
-------------------- 
=> The find() method returns the value of the first array element that passes a test function
*/
const num = [4, 9, 16, 25, 29];
let first = num.find(myFun);
console.log("Number is ==> ",first)

function myFun(value) {
  return value > 18;
}

/*18. Array findIndex():-
------------------------- */
const n = [4, 9, 16, 25, 29];
let first1 = n.findIndex(myFuns);
console.log("Number is ==> ",first1)

function myFuns(value) {
  return value > 18;
}

/*19. New Math Methods:-
----------------------------
=> ES6 added the following methods to the Math object:
1. Math.trunc() => Math.trunc(x) returns the integer part of x
2. Math.sign() => returns if x is negative, null or positive
3. Math.cbrt() => Math.cbrt(x) returns the cube root of x
4. Math.log2() => Math.log2(x) returns the base 2 logarithm of x
5. Math.log10() => Math.log10(x) returns the base 10 logarithm of x
 */
/*1. Math.trunc():-
--------------------- */
let a1= Math.trunc(4.9);    // returns 4
console.log(a1);
let a2= Math.trunc(4.7);    // returns 4
console.log(a2);
let a3= Math.trunc(4.4);    // returns 4
console.log(a3);
let a4= Math.trunc(-0.2);    // returns -0
console.log(a4);
let a5= Math.trunc(-4.2);   // returns -4
console.log(a5);

/*1. Math.sign():-
--------------------- */
let b1= Math.sign(-4.9);    // returns -1
console.log(b1);
let b2= Math.sign(0.1);    // returns 1
console.log(b2);
let b3= Math.sign(4.4);    // returns 1
console.log(b3);
let b4= Math.sign(0);    // returns 0
console.log(b4);

/*3. The Math.cbrt() Method:=
------------------------------ */
let c1= Math.cbrt(8);    // returns 2
console.log(c1);
let c2= Math.cbrt(0.64);    // returns 0.8617738760127535
console.log(c2);
let c3=Math.cbrt(126);    // returns 5.0132979349645845
console.log(c3);

/**4. The Math.log2() Method:-
 ------------------------------*/
 let d1= Math.log2(-3);    // returns Nan
 console.log(d1);
 let d2= Math.log2(0);    // returns -Infinity
 console.log(d2);
 let d3= Math.log2(0.5);    // returns -1
 console.log(d3);

 /*Math.log10() :=
 ----------------- */
 let e1= Math.log10(10);    // returns 1
console.log(e1)
let e2= Math.log10(-10);    // returns NaN
console.log(e2)
let e3= Math.log10(0.10);    // returns -1
console.log(e3)

/*19. Destructuring Arrays:-
---------------------------*/
    function calculate(a, b) {
        const add = a + b;
        const subtract = a - b;
        const multiply = a * b;
        const divide = a / b;
      
        return [add, subtract, multiply, divide];
      }
      
      const [add, subtract, multiply, divide] = calculate(4, 7);
      console.log("Addition ==> ", add);
      console.log("subtract ==> ", subtract);
      console.log("multiply ==> ", multiply);
      console.log("divide ==> ", divide);

    /*20. Destructuring Objects:-
    ------------------------- */
    const vehicleOne = {
        brand: 'Ford',
        model: 'Mustang',
        type: 'car',
        year: 2021, 
        color: 'red'
      }
      
      myVehicle(vehicleOne);
      
      function myVehicle({type, color, brand, model}) {
        const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
        console.log(message);
      }
 /*21. Object entries():-
 --------------------------
 => Create an Array Iterator, and then iterate over the key/value pairs
  */   
 const fruits = ["Banana", "Orange", "Apple", "Mango"];
 const f = fruits.entries();
 for (let x of f) {
   console.log(x)
 }
 /*22. Exponentiation Operator (**):-
 ----------------------------------- 
 => The exponentiation operator (**) raises the first operand to the power of the second operand
 => like that => Math.pow(x, y)*/
function powerCheck(){
    let x = 5;
    let z = x ** 2;
    console.log(z);
}
powerCheck();//25

/*23.Exponentiation assignment (**=):-
------------------------------------------------
=> The exponentiation assignment operator (**=) raises the value of a variable to the power of the right operand. */

function powerCheck1(){
    let x = 5;
    let z = x **= 3;
    console.log(z);
}
powerCheck1();//125

/*24. Array includes():-
-------------------------- */
const place = ["Pune", "Noida", "Delhi", "Mumbai"];
let m= place.includes("mumbai");
console.log(m)//false

/*25.String Padding:-
---------------------- 
=> padStart() and padEnd() to support padding at the beginning and at the end of a string. 
*/
/*1. padStart():-
----------------- */
let t = "5";
let t1 = t.padStart(4,0);
console.log(t1)
let o= "jyoti";
let o1 = o.padStart(7,0);//00jyoti ==> here add 00 before and upto length 7
console.log(o1)

/*2.padEnd():-
---------------*/
let r = "5";
let r1 = r.padEnd(4,0);
console.log(r1)
let v= "jyoti";
let v1 = o.padEnd(7,0);//jyoti00 ==> here add 00 after and upto length 7
console.log(v1)

/*26. Object Values:-
-------------------
=> Object.values() are similar to Object.entries(), but returns a single dimension array of the object values
 */
const person = {
    firstName : "John",
    lastName : "Doe",
    age : 50,
    eyeColor : "blue"
  };
  
  let per = Object.values(person);
  console.log(per);

