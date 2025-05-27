
// acesssing of Elements 
// let h1 = document.getElementById("heading");
// console.log(h1);
// let para =document.querySelector(".paragraph");
// console.log(para);

// // assigning dyamic content
// h1.textContent = "DOM MANPULATIONS";
// para.textContent ="This is a paragraph";

// //event handeler
// let btn =document.querySelector(".btn-2");
// btn.addEventListener("click",()=>{
//     // console.log("clicks on me");
//     h1.textContent ="Document Object Model event Handler";
//     h1.style.color ="green"
//     h1.style.backgroundColor ="brown"
// })

// let input =document.querySelector("#Name");
// let button =document.querySelector(".btn-1");
// button.addEventListener("click",()=>{
//     console.log(input.value);
// }
// )

// let input1=document.querySelector("#firstNumber");
// let input2=document.querySelector("#secondNumber");
// let add=document.querySelector(".add");
// let result =document.querySelector(".result");

// add.addEventListener("click",() =>{
//     let v1=input1.value;
//     let v2=input2.value;
//     let sum = (+v1)+(+v2);
//     result.textContent=sum;


// })


let parent = document.querySelector(".parent");
let arr =[78,98,86,56,46];
for(let s of arr){
    let h1=document.createElement("h1");
    h1.textContent=s;
    parent.appendChild(h1);
}
