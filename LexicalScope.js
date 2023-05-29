/* Lexical scope:-
------------------
=> Lexical scope describes how nested (also known as "child") functions have access to variables defined in parent scopes. 

Example:-
--------*/
const myFunction = () => {
    let myValue = 2;
    console.log("Value inside parent function ==>  ",myValue);

    const Function = () => {
         console.log("Value inside child function ==>  ",myValue += 1);
    }
    Function();
}
myFunction();

/*Example:-
---------- */
//var x=10;
const firstFunction = () => {
    let x = 2;
    //var x= 11;
    let y= 5;
    console.log("Value inside first function ==>  ",x);//2

    const secondFunction = () => {
         console.log("Value inside second function ==>  ",x += 1);//3

         const thirdFunction =() => {
            console.log("Value inside third function part 1 ==>  ",x += 1);//4
            console.log("Value inside third function part 2 ==>  ",y += 1);//6
         }
         thirdFunction();
    }
    secondFunction();
}
firstFunction();



