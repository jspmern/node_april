let path=require('path')
 
//join
 
//let result=path.join(__dirname,'abc.txt')
//let result2=path.join(__dirname,'..','fs/demonew.txt')
 //resolve
let result=path.resolve(__dirname,'../..','demo','a.txt')
//console.log(result)
//basename
let result2=path.basename(result)
//result3
//extname
let result3=path.extname(result)
//console.log(result3)
// let url={
//     base:'a.txt',
//     dir:'c//home/abc'
// }
 //let result4=path.format(url)
 //console.log(result4)
   //normalize
 let result5=path.normalize(__dirname,'\\\abc','a.txt')
 console.log(result5)
 