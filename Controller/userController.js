const express = require ('express');
const user =require ('../model/usermodule');
const userservice = require('../Services/userservices')


exports.register = async(req,res)=>{
    try{
        const inputdata=req.body;
        const Book_Code = inputdata.Book_Code;
        console.log('Book_Code',Book_Code);
        const activeuser = await userservice.findbyEmail(Book_Code);
        if(activeuser){
            res.status(500).json({message : "user already exist"});
        }
        else{
            const createdata = await userservice.createuser(inputdata)
            res.status(200).json({
                message:'success', data: createdata
        })

        }
    }
    catch(error){
        res.status(500).json({message:"fail"})
    }
    
}