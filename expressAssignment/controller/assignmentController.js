let fs=require('fs')
let path=require('path')
const dbRead = require('../utilites/dbread')
let homeController=(req,res)=>{
    let homePath=path.join(__dirname,'../public/index.html')
    res.status(200).sendFile(homePath)
 }
 let aboutController=(req,res)=>{
    let aboutPath=path.join(__dirname,'../public/about.html')
    res.status(200).sendFile(aboutPath)
 }
 let contactController=(req,res)=>{
    let contactPath=path.join(__dirname,'../public/contact.html')
    res.status(200).sendFile(contactPath)
 }
 let contactPostController=(req,res)=>{
    let {email,text}=req.body
    console.log(email,text)
    if(!email || !text)
    {
        throw new Error('all field is required')
    }
    else{
          let dbPath=path.join(__dirname,'../db/db.json')
          let obj={id:Math.trunc(Math.random()*1000),text,email}
          //read file
          fs.readFile(dbPath,'utf-8',(err,data)=>{
            if(err)
            {
                throw new Error('somthig wrong while registring user')
            }
            else{
                let orignalData=JSON.parse(data)
                let newUpdatedateData=[obj,...orignalData]
                fs.writeFile(dbPath,JSON.stringify(newUpdatedateData),(err)=>{
                    if(err)
                    {
                        throw new Error('somthing wrong while registring user')
                    }
                    else{
                        res.status(200).send({message:"user is registred",data:newUpdatedateData,success:true})
                    }
                })
            }
          })
           
    }
  }
  let allDataController=(req,res)=>{
    let allUserPath=path.join(__dirname,'../public/allUser.html')
    res.status(200).sendFile(allUserPath)
 }
 let userController= (req,res)=>{
    let dbPath=path.join(__dirname,'../db/db.json')
    
    //read file
    fs.readFile(dbPath,'utf-8',(err,data)=>{
      if(err)
      {
          throw new Error('somthig wrong while registring user')
      }
      else{
          let orignalData=JSON.parse(data)
          res.send({success:true,data:orignalData})
      } })
 }
 let searchHandler=(req,res)=>{
    let {search}=req.query
   
    let dbPath=path.join(__dirname,'../db/db.json')
     //read the data
     fs.readFile(dbPath,'utf-8',(err,data)=>{
        if(err)
        {
        throw new Error('sonthing wrong in searching')
        }
        else{
           let orignalData=JSON.parse(data)
           let updateData=orignalData.filter((item)=>{
            return item.text.trim().toLowerCase().includes(search.trim().toLowerCase())
           })
            res.send({data:updateData,success:true})
        }
     })
 }
 let filterRouteHandler=async(req,res)=>{
    let dbPath=path.join(__dirname,'../db/db.json')
    let {sort}=req.body 
     fs.readFile(dbPath,'utf-8',(err,data)=>{
        if(err)
        {
            throw new Error('somthing wrong')
        }
        else{
            let orignalData=JSON.parse(data)
            function sorting(a, b) {
                if (sort == "A_Z") {
                    return a.text.localeCompare(b.text)
                }
                else if (sort == "Z_A") {
                        return b.text.localeCompare(a.text)
                 }
                else if (sort == "1_10") {
                    return a.id - b.id
                }
                else {
                    return b.id - a.id
    
                }
            }
            orignalData.sort(sorting)
            res.send(orignalData)
        }
     })
 }
 module.exports={homeController,aboutController,contactController,contactPostController,userController,allDataController,searchHandler,filterRouteHandler}