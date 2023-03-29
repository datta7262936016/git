// crud METHODS

const fs=require('fs');
const { METHODS } = require('http');
const path=require('path');
const dirPath=path.join(__dirname,'crud');
const filepath=`${dirPath}/apple.txt`;


// fs.writeFileSync(filepath,'this is a simple file');

// fs.readFile(filepath,'utf-8',(err,item)=>{
// console.log(item);
// })

// fs.appendFileSync(filepath,'and file name is apple.txt',(err)=>{
// if(!err) console.log("file is updated");
// })

// fs.rename(filepath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log("file name is updated");
// })

fs.unlinkSync(`${dirPath}/fruit.txt`)