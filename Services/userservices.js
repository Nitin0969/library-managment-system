const moongose = require('mongoose')
const user = require("../model/usermodule")

exports.findbyEmail= async(Book_Code)=>{
    return await user.findOne({'Book_Code':Book_Code}).select('_id').lean()
}
exports.createuser = async(data)=>{
    return await user.create(data);
}