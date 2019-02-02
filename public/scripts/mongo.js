let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const usersSchema = new Schema({
    user_id: String, 
    email: String, 
    password: String, 
    confirm_password: String
  });

 module.exports =  mongoose.model('Users', usersSchema)
