// console.log("start exe...");

// setTimeout(()=>{
//   console.log("logic exe...");  
// },2000)

// console.log("complete exe...");

// // let a=10,b=0;
// // setTimeout(()=>{
// //        b=20  
// //      },2000)
// //      console.log(a+b);

let a=10,b=0;
let waitingdata=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30)
    },2000)
})

waitingdata.then((data)=>{
    b=data;
    console.log(a+b);
})