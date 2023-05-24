/*Array Properties and Methods:-
-------------------------------

Converting Arrays to Strings:-
----------------------------
=> The JavaScript method "  toString()  " converts an array to a string of (comma separated) array values.
 Example1:-
 -------- */
 const number=[10,85,2,1,89,25];
 console.log(number)
 let numToString= number.toString();
 console.log("Converting array to string ==>  "+numToString)
 console.log("-----------------------------------")

 /*Output:-
 ----------
 [ 10, 85, 2, 1, 89, 25 ]
Converting array to string ==>  10,85,2,1,89,25
 */
 
 /*Popping and Pushing:-
 ----------------------
 JavaScript Array pop():-
 ----------------------
 => The pop() method removes the last element from an array:
 
 example:-
 ---------*/
 const data=["Apple", "Banana","Mango","Oranage","Date"];
 console.log(data)
 data.pop();
 console.log(data)
 //console.log("Remove last element ==>  "+data)
 //console.log("Remove last element ==>  "+popData)
 console.log("-----------------------------------")

 /*Output:-
 ----------
 [ 'Apple', 'Banana', 'Mango', 'Oranage', 'Date' ]
[ 'Apple', 'Banana', 'Mango', 'Oranage' ]
 */

 /*JavaScript Array push():-
 ------------------------------
=>The push() method adds a new element to an array (at the end): 

Example:-
---------*/
const dataPush=["Apple", "Banana","Mango","Oranage","Date"];
 console.log(dataPush)
 dataPush.push("Fig");
 console.log(dataPush)
 //console.log("Remove last element ==>  "+data)
 //console.log("Remove last element ==>  "+popData)
 console.log("-----------------------------------")

 /*Output:-
 ----------
 [ 'Apple', 'Banana', 'Mango', 'Oranage', 'Date' ]
[ 'Apple', 'Banana', 'Mango', 'Oranage', 'Date', 'Fig' ]
 */

/*Shifting Elements:-
----------------------
=> Shifting is equivalent to popping, but working on the first element instead of the last. 

JavaScript Array shift():-
---------------------------
=> The shift() method removes the first array element and "shifts" all other elements to a lower index.

Example:-
---------*/
const dataShift=[10, 5, 2, 25, 8];
 console.log(dataShift)
 dataShift.shift();
 console.log(dataShift)
 console.log("-----------------------------------")

 /*Output:-
 ----------
 [ 10, 5, 2, 25, 8 ]
[ 5, 2, 25, 8 ]
 */

/*JavaScript Array unshift():-
-------------------------------
=> The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
 
Example-
--------*/

const dataUnShift=[10, 5, 2, 25, 8];
 console.log(dataUnShift)
 dataUnShift.unshift(500);
 console.log(dataUnShift)
 console.log("-----------------------------------")

 /*Output:-
 ----------
 [ 10, 5, 2, 25, 8 ]
[ 500, 10, 5, 2, 25, 8 ]
 */

/*Changing Elements:-
-------------------------
=> Array elements are accessed/ add element using their index number:
 
Example:-
---------*/
const dataAccess=[10, 5, 2, 25, 8];
 console.log(dataAccess)
 dataAccess[2]="Happy";
 console.log(dataAccess)
 console.log("-----------------------------------")

 /*Output:-
 -------------
 [ 10, 5, 2, 25, 8 ]
[ 10, 5, 'Happy', 25, 8 ]
 */

/*JavaScript Array length:-
---------------------------
=> The length property provides an easy way to append a new element to an array:

Example:-
---------*/
const dataLength=[10, 5, 2, 25, 8];
 console.log(dataLength)
 let length=dataLength.length;
 dataLength[dataLength.length]=100;//here append a new element to an array at last
 console.log(length)
 console.log(dataLength)
 console.log("-----------------------------------")

 /*Output:-
 -------------
 [ 10, 5, 2, 25, 8 ]
 5
 [ 10, 5, 2, 25, 8, 100 ]
 */

 /* JavaScript Array delete():-
 ------------------------------
 => Using delete leaves undefined holes in the array.
=> Use pop() or shift() instead. 
  
 Example:-
 ----------*/
 const fruits = ["Banana", "Orange", "Apple", "Mango"];
 let deleteValue = delete fruits[2];
console.log(fruits)
console.log("-----------------------------------")

/*Output:-
-----------
[ 'Banana', 'Orange', <1 empty item>, 'Mango' ]
 */

/*Merging (Concatenating) Arrays:-
----------------------------------
=> The concat() method creates a new array by merging (concatenating) existing arrays:
 Example:-
 --------- */
 const arr1= ["Happy","Sad","Angry","Cool"];
 const arr2= [25,10,15,20];
 const concatArray= arr1.concat(arr2);
 console.log(concatArray);
 console.log("-----------------------------------");

 /*Output:-
-----------
[ 'Happy', 'Sad', 'Angry', 'Cool',  25,  10,  15,  20 ]
 */

/*Example
----------*/
const arr11 = ["Rahul", "Anmol"];
const arr12 = ["Piyush", "Ritesh", "Hayat"];
const arr13 = ["Moonbin", "Manisha"];
const allNames = arr11.concat(arr12, arr13);
console.log(allNames);
console.log("-----------------------------------");

/*Output:-
---------
[
  'Rahul',   'Anmol',
  'Piyush',  'Ritesh',
  'Hayat',   'Moonbin',
  'Manisha'
]*/

/*Flattening an Array:-
--------------------------
=> Flattening an array is the process of reducing the dimensionality of an array.
=> The flat() method creates a new array with sub-array elements concatenated to a specified depth. 

Example:-
---------*/
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr);
console.log("-----------------------------------");

/*Output:-
----------
[ 1, 2, 3, 4, 5, 6 ]
 */

/*Splicing and Slicing Arrays:-
-------------------------------
=> The slice() method ==> slices out a piece of an array.
=> Syntax:= array_name.splice(index, number of element wants remove, name_of_new_elements);

JavaScript Array splice():-
-------------------------------
=> The splice() method ==>  adds new items to an array.
=> The splice() method returns an array with the deleted items:

Example:-
----------*/
const cityName= ["Noida", "Delhi", "Pune", "Mumbai"]
console.log(cityName)
let removeCity= cityName.splice(2,1,"Lucknow","Jaipur");
console.log(cityName);
console.log(removeCity);
console.log("-----------------------------------");

/*Output:-
-------------
[ 'Noida', 'Delhi', 'Pune', 'Mumbai' ]
[ 'Noida', 'Delhi', 'Lucknow', 'Jaipur', 'Mumbai' ]
[ 'Pune' ]
*/

/* Using splice() to Remove Elements:-
-----------------------------------------
=> With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:
Example:-
----------*/
const items = ["Banana", "Orange", "Apple", "Mango"];
console.log(items)
let removeItem=fruits.splice(0, 1);
console.log(removeItem)
console.log("-----------------------------------");
/*Output:-
---------
[ 'Banana', 'Orange', 'Apple', 'Mango' ]
[ 'Banana' ]

/*Notes:-
---------
=> The first parameter (0) defines the position where new elements should be added (spliced in).
=> The second parameter (1) defines how many elements should be removed.
=> The rest of the parameters are omitted. No new elements will be added. */

/*JavaScript Array slice():-
----------------------------
=> The slice() method slices out a piece of an array into a new array.

Example:-
----------*/
const elm = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(elm);
const citrus = elm.slice(1);
console.log(citrus)
console.log("-----------------------------------");
/*Output:-
---------
[ 'Banana', 'Orange', 'Lemon', 'Apple', 'Mango' ]
[ 'Orange', 'Lemon', 'Apple', 'Mango' ]*/

/*Sorting an Array:-
-------------------------
=> The sort() method sorts an array alphabetically:
Example:-
--------*/
const geture = ["Goodday", "Bye", "Hello", "Hii"];
console.log(geture);
geture.sort();
console.log(geture);
console.log("-----------------------------------");
/*output:-
----------
[ 'Goodday', 'Bye', 'Hello', 'Hii' ]
[ 'Bye', 'Goodday', 'Hello', 'Hii' ]
*/

/*Reversing an Array:-
------------------------
=> The reverse() method reverses the elements in an array.
=> You can use it to sort an array in descending order:
 
Example:-
--------*/
const get = ["Goodday", "Bye", "Hello", "Hii"];
console.log(get);
get.reverse();
console.log(get);
console.log("-----------------------------------");

/*output:-
----------
[ 'Goodday', 'Bye', 'Hello', 'Hii' ]
[ 'Hii', 'Hello', 'Bye', 'Goodday' ]
*/

/*Numeric Sort:-
----------------
=> Use the same trick to sort an array Ascending:

Example:1-
---------*/
const pointToAscending = [40, 100, 1, 5, 25, 10];
pointToAscending.sort(function(a, b){return a - b});
console.log(pointToAscending);
console.log("-----------------------------------");

/*output:-
----------
[ 1, 5, 10, 25, 40, 100 ]
*/

/*Example:1-
---------*/
const pointToDescending = [40, 100, 1, 5, 25, 10];
pointToDescending.sort(function(a, b){return b - a});
console.log(pointToDescending);
console.log("-----------------------------------");

/*output:-
----------
[ 100, 40, 25, 10, 5, 1 ]
*/

/* Using Math.max() on an Array:-
----------------------------------
 =>You can use Math.max.apply to find the highest number in an array:

Example:-
-------- */

console.log("----------------------------------")
const point = [ 105, 1, 5, 25, 10, 0.5];
const maxNumber=Math.max.apply(null, point)
console.log("Max value  =>  "+maxNumber)
/*Output:-
-----------
Max value  =>  105
*/


/*Using Math.min() on an Array:=
---------------------------------
=> You can use Math.min.apply to find the lowest number in an array:
 */

console.log("----------------------------------")
const point1 = [ 105, 1, 5, 25, 10, 0.5];
const minNumber=Math.min.apply(null, point1)
console.log("Min value  =>  "+minNumber)

/*Output:-
-----------
Min value  =>  0.5
*/

/*Sorting an Array in Random Order:-
------------------------------------
Example:-
---------*/
console.log("----------------------------------")
const point2 = [ 105, 1, 5, 25, 10, 0.5];
const randonNumber= point2.sort(function(){return 0.5 - Math.random()});
console.log("Sort number in randoom order =>  "+randonNumber)

/*Output:-
Sort number in rendoom order =>  105,1,5,25,10,0.5 
*/

/*Sorting Object Arrays:-
--------------------------
Example:-
------------ */
console.log("----------------------------------")
const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];
  console.log(cars);
  cars.sort(function(a, b){return a.year - b.year});
  console.log(cars);
/*Output:-
------------- 
[
  { type: 'Volvo', year: 2016 },
  { type: 'Saab', year: 2001 },
  { type: 'BMW', year: 2010 }
]
[
  { type: 'Saab', year: 2001 },
  { type: 'BMW', year: 2010 },
  { type: 'Volvo', year: 2016 }
]*/

