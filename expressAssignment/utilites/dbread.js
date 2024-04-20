let path=require('path')
let fs=require('fs')
let dbPath=path.join(__dirname,'../db/db.json')
let commonData=''
async function dbRead()
{  
      (function(){
        fs.readFile(dbPath,'utf-8',async (err,data)=>{
            if(err)
            {
               throw new Error('somthing wrong')
            }
            else{
               let   orignalData=  JSON.parse(data)
                  commonData=orignalData
                  
                 
            }
        })
      }())
 
    
   return commonData  
}
module.exports=dbRead