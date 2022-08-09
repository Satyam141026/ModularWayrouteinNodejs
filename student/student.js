const express=require('express')
const student=express.Router();

student.get('/show',((req,recp)=>{
    recp.send('data is show of hte data route of hte currentnof hte thats why are  in the school is hte corrupt of hte ')

}))
module.exports={student:student}


