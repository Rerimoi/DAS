const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const bootstrap = require('bootstrap')

const routes = require('./routes/index')


const app = express();

//view engine
app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'views'))


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))


// Initialize the route handling
// Check ./routes/index.js to get a list of all implemented routes
app.use('/', routes)

app.listen(3000, function(){
    console.log('listening to port 3000')
});