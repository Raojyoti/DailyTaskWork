/*Async and await:-
-------------------- 
Async: ==> Async make function return Promise
await: ==> Await make function wait for a Promise
*/
/*Example 1:-
------------------------------- */

function test(number){
    return new Promise( (resolve, reject) => {
        if(number > 0){
            resolve(true)
        }
        else{
            reject("Number is negative .....")
        }
    })
}

async function checkResult(){
    try{
        let result= await test(5);
        console.log(result);
    }catch(error){
        console.log(error);
    }
}
checkResult();//true

/*Example 2:-
--------------*/
const promisValue= new Promise( (resolve, reject) => {
	setTimeout( () => {
	  var roll_no =[1, 2, 3, 4];
	  resolve(roll_no);
	  //reject("Fail to find roll number");
	},2000);
  });

  const getStudentDetails= () => {
	return new Promise( (resolve) => {
	  setTimeout( () => {
		let stdDetail= {
		  name : 'Riya',
		  age : 24
		}
		resolve(`My name is ${stdDetail.name} and my age is ${stdDetail.age} `)
	  },2000)
	})
  }

async function getData(){
	try{
		let getRoll= await promisValue;
	console.log(getRoll);
	let getNameAge= await getStudentDetails();
	console.log(getNameAge);
	}catch(error){
		console.log(`The Error: ${error}`);
	}
}
getData();

/*Example 3:-
--------------*/
const arrayNum = [10,2,3,4];
var first=10;
var findMaxValueIndex = (arrayNum) => {
   return new Promise( (resolve, reject) => {
        for(var i=0; i<arrayNum.length -1; i++){
            if(first < arrayNum[i]){
                resolve(`${arrayNum[i]} index ===> ${i}`);
            }
            else{
                reject("failed to find value ...")
            }
        }
    })
}
async function findIndex(){
    try{
		let findOutput= await findMaxValueIndex(arrayNum);
	console.log(findOutput);
	}catch(error){
		console.log(`The Error: ${error}`);
	}
}
findIndex();

/*Example 4:-
--------------*/
const arr = [10,20,30,4];
function findMax(arr){
    return new Promise((resolve, reject) => {
        var maximum=Math.max(...arr)
        resolve(maximum);
    })
}
async function checkMax(){
    let maxResult= await findMax(arr)
    console.log("Max value  ==>  ",maxResult);
}
checkMax();

/*Example 5:-
--------------*/
const arrayNumber = [10,20,30,4];
var num=30;
function searchNumber(arrayNumber){
    return new Promise((resolve) => {
        for(var i=0; i<arrayNumber.length -1; i++){
            if(num == arrayNumber[i]){
                resolve(`${arrayNumber[i]} index ===> ${i}`);
                break;
            }
        }
    })
}

async function checkNumber(){
    let numOut=await searchNumber(arrayNumber);
    console.log(numOut);
}
checkNumber();