let fs=require('fs')
//write file
          //sync
// console.log('devtest1')
// fs.writeFileSync('demo.txt','hello how are you !')
// fs.writeFileSync('index.html',"<h1>hello how are you !</h1>")
// console.log('devtest2')
           //async
        //   console.log('devtest1')
        //     fs.writeFile('demo1.txt',"hello",(err)=>{
        //          if(err)
        //          {
        //             return
        //          }
        //          else{
        //             console.log('done')
        //          }
        //     })
        //    console.log('devtest2')      
        
//read file
         //sync
//let data= fs.readFileSync('demo.txt','utf-8') 
//console.log(data )   
        //async
// fs.readFile('de.txt','utf-8',(err,data)=>{
//     if(err)
//     {
//         console.log('somthing wrong while reading')
//     }
//     else{
//         console.log(data)
//     }
// })     

//append file
// fs.appendFile('demo.txt',"i am mern stack trainer",(err)=>{
//     if(err)
//     {
//         console.log('somthing wrong')
//     }
//     else{
//         console.log('updated successful')
//     }
// })

  //delete file
//   fs.unlinkSync('demo1.txt')
  //rename file
  //fs.renameSync('demo.txt','demonew.txt')
  //creating folder
  //fs.mkdirSync('../utsav')
   //delete folder
 // fs.rmdirSync('../utsav')
 //copy
 fs.copyFileSync('demonew.txt','abc.txt')