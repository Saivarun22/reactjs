// console.log("Ordered biryani");
// setTimeout(() => {
//     console.log("biryani is delivered");
// },10000);
// console.log("Ordered curedrice");
// setTimeout(() =>{
//     console.log("curedrice is delivered");
// },5000);
// console.log("Ordered waterbottle");
// setTimeout(()=>{
//     console.log("waterbottle is delivered");
// },2000);
// console.log("Ordered icecream");
// setTimeout(() => {
//     console.log("icecream is delivered");
// },3000);


// let iambusy = true;
// let phoneCall = new Promise((resolve, reject) => {
//     if(iambusy == false){
//         setTimeout(() => 
//             {resolve("hello ,how are you?")}, 
//         5000);
//     }else{
//         setTimeout(() => 
//             {reject("sorry, I am busy")}, 
//         5000);
//     }
// })

// phoneCall.then((message) => {
//     console.log(message);
// })
// .catch((err)=>{
//     console.log(err);
// })

// let technicalError =true;
// let songRelease = new Promise((fullfilled,rejected)=>{
//     if(technicalError == false){
//         setTimeout(()=>{
//             fullfilled("song is released");
//         },8000);
//     }
//     else{
//         setTimeout(()=>{
//             rejected("song is not released");
//         },8000)
//     }
// })
// songRelease.then((song)=>{
//     console.log(song);
// })
// .catch((err)=>{
//     console.log(err);
// })


fetch('https://jsonplaceholder.typicode.com/posts')
.then(response =>response.json())
.then(apiData => console.log(apiData))
.catch(err =>console.log(err))