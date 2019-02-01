let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let usersSchema = new Schema({
    user_Id: String , 
    email: String, 
    password: String, 
    confirm_password: String
  });

 module.exports =  mongoose.model('Users', usersSchema)