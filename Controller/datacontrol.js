const userData = require('../model/usermodule');
// delete the data
exports.deletedata=async(req,res)=>{
    try{
        const user=await userData.findOneAndDelete({Book_Code:req.body.Book_Code});
        res.send("data delete succesfully "+user);     
    }
    catch(erro){
        console.log("Error "+erro.message);
    }
    }

    // update the data
    exports.updatedata = async(req,res)=>{
        try{
         const user=await userData.findOneAndUpdate({Book_Code:req.body.Book_Code},{Book_name:req.body.Book_name},{new:true});
         res.send("update succesfully "+user);     
     }
     catch(erro){
         console.log("Error "+erro.message);
     }
 }
//  get data

exports.getdata=async(req,res)=>{
    try{
        const data = await userData.findOne({Book_Code:req.body.Book_Code});
        res.send("data"+data)
    }
    catch(erro){
        console.log("Error "+erro.message);}
}

