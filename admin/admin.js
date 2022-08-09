const express=require('express')
const admin=express.Router();

admin.get('/getapi',((req,recp)=>{
    recp.status(200).json('getApi')

}))
module.exports=admin;