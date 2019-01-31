const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose =require('mongoose')




const routes = require('./routes/index')




const app = express();
let PORT = 5000;

//view engine
app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'views'))


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

// use bootstrapp modules
// app.use(bootstrap.js())

// Initialize the route handling
// Check ./routes/index.js to get a list of all implemented routes
app.use('/', routes)

//connecting to database
mongoose.connect('mongodb+srv://Paula:rerimoi@das-ahzne.gcp.mongodb.net/DAS').DAS;

// app.post("/account", (req, res) => {res.render('account',{title: 'Login page'})
//   res.send("item saved to database");
// });
  
  

 
  
  

app.listen(PORT, function(){
    console.log('listening to port' + PORT);
});

