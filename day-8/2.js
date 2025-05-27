// //Decleration and assing elements in array

// var arr=[10,20,30,40,50]
// console.log(arr);


// //iterate through for loop
// console.log("Using For Loop");
// console.log("--------------");
// for(var index =0;index<arr.length;index++){
//     console.log(arr[index]);
// }

// //iterate through while loop
// console.log("Using while Loop");
// console.log("--------------");
// var i =0;
// while(i<arr.length){
//     console.log(arr[i]);
//     i++;
// }

// //iterate through for of loop
// console.log("Using for of Loop");
// console.log("--------------");
// for(var v of arr){
//     console.log(v);
// }

// var arr =[10,20,30,40];
// console.log(arr);

// //add elements at beginig of array
// arr.unshift(100,200,300,400);
// console.log(arr);

// //add elements atb end of array
// arr.push(1,2,3,4);
// console.log(arr);

// //add element at specific location 
// arr.splice(4,0,100,200,300,400);
// console.log(arr);

// //delete element from begining of array
// var deleted = arr.shift()
// console.log(arr);
// console.log(deleted);

// //delete element from end of array
// var deleted1 = arr.pop()
// console.log(arr);
// console.log(deleted1);

// //delete element from specific location  of array
// var deleted2 = arr.splice(3,4,1234,234,34,4);
// console.log(arr);
// console.log(deleted2);

// //replace of elements

// var replace = arr.splice(7,2,567,67);
// console.log(arr);
// console.log(replace);

//callback function 
function test1 (){

    return "This is function test1"

}
function test2 (a){

    console.log(a());
}
test2(test1);

// filter method
let arr=[4,67,87,56,48,98,72,35,42]
// let evenNumber = arr.filter(function(element){
//           return element%2==0;
// })
// console.log(evenNumber);

//using arrow function
// let evenNumber = arr.filter(element => element%2==0)
// console.log(evenNumber);

// let nuberBetween30And200 = arr.filter(element => element>30 && element<200)
// console.log(nuberBetween30And200);

// map method
// let incrementAllElementsBy20 =arr.map(element => element+20)
// console.log(incrementAllElementsBy20);

// let multiplyAllElementsBy20 =arr.map(element => element*20)
// console.log(multiplyAllElementsBy20);

//use foreach method to iterate all elements
// arr.forEach((element,index) => 
//     console.log (`value of index ${index} and element is  ${element}`))

//reduce method
// let factorialOfArray = arr.reduce((accumulator,element) => accumulator*element)
// console.log(factorialOfArray)

//find method 
// let elementIsPresentInArrayOrNot = arr.find(element => element==100)
// if(elementIsPresentInArrayOrNot == undefined){
//     console.log("element is not present");
// }else{
//     console.log("element is present");
// }

//findIndex method

// let findIndexValue  =arr.findIndex(element => element==48 )
// console.log(findIndexValue)
// let findIndexValue  =arr.findIndex(element => element==100 )
// console.log(findIndexValue)