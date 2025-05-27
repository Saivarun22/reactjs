// //Rest Parameter

//  function sumOfNNumbers(...a){

//     return a.reduce((accumulator,element) => accumulator+element);

//  }

//  console.log(sumOfNNumbers(34,45,56,76,78,89,97,64,43,42,32,24,14,56));

//  //Spread Syntax 
//  //Merged Arrays

//  let a=[10,20];
//  let b=[30,40];
//  let c=[50,60];
//  let mergedArray = [...a,...b,...c];
//  console.log(mergedArray);


//  //Merged Objects

//  let first={
//     name:"varun",
//     age:22,};

//  let second={
//     name:"ram",
//     age:30};

// let mergedObject ={...first,...second};
// console.log(mergedObject);


// // Creating  a Copy Of Array
// let arr =[10,20,30];
// let mergedArr=[...arr];
// arr.push(40);
// console.log("Original Array",arr);
// console.log("Copied Array",mergedArr);


//Destructuring
//arrayDestructure

let numbers=[40,68,79,58];
let[w,x,y,z] = numbers;
console.log(w);
console.log(x);
console.log(y);
console.log(z);

//objectDestruture

let obj ={salary:45000,
    id:45,
    place:"Hyderabad"};

let{salary,id,place}=obj;
console.log(salary);
console.log(id);
console.log(place);