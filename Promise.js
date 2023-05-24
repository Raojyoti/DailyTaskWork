/*Promise:-
 -----------
=> In JavaScript, a promise is a good way to handle asynchronous operations. 
=> A promise may have one of three states.
1 Pending
2 Fulfilled
3 Rejected
=> A promise starts in a pending state. That means the process is not complete. 
=> If the operation is successful, the process ends in a fulfilled state. 
=> And, if an error occurs, the process ends in a rejected state.  
Syntax:-
--------
let promise = new Promise(function(resolve, reject){
     //do something
});

Why use Promise?
----------------
=> To avoid callback hell problem and promise are eary to manage when dealing with multiple asynchronous operations.*/
/*Example1:-
-----------*/

const addDemo= (a, b) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
          let sum= a+b;
          resolve(sum);
           //reject("Fail to find sum");
        },2000);
      });
}
addDemo(5,3).then((result) => { console.log("Addition of number by using Promise ==> ", result)}).catch((error) => { console.log(error)})
  
const subDemo= (a, b) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
          let sub= a+b;
          resolve(sub);
           //reject("Fail to find substractions");
        },2000);
      });
  }
  subDemo(15,3).then((result) => { console.log("Substractions of number by using Promise ==> ", result)}).catch((error) => { console.log(error)})

  const productDemo= (a, b) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
          let product= a+b;
          //resolve(product);
           reject("Fail to find Product");
        },2000);
      });
  }

  productDemo(50,30).then((result) => { console.log("Production of number by using Promise ==> ", result)}).catch((error) => { console.log(error)})


/*Example2:-
-----------*/
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
  
  PromiseDemo(true).then((result)=> {console.log(result)}).catch((error) => {console.log(error)});

  /*Example3:-
------------
 */
const promisValue= new Promise( (resolve, reject) => {
    setTimeout( () => {
      var roll_no =[1, 2, 3, 4];
      resolve(roll_no);
      //reject("Fail to find roll number");
    },2000);
  });
  promisValue.then((result) =>{console.log(result)}).catch((error) =>{ console.log(error)});

  /*Example4:-
  ------------ */
  const getStudentDetails= () => {
    return new Promise( (resolve, reject) => {
      setTimeout( () => {
        let stdDetail= {
          name : 'Anmol',
          age : 22
        }
        resolve(`My name is ${stdDetail.name} and my age is ${stdDetail.age} `)
      },2000)
    })
  }

 getStudentDetails().then((resolve) => {console.log(resolve)})
  
  
  