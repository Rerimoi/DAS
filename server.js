const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();

// app.set('port', process.env.PORT || 8081);

//  //custom 404 page
//  app.use(function(req,res){
//      res.type('text/plain');
//      res.status(404)
//      res.send('Sorry page not fond, please check your internet connection');
// });

// //custom 500 page
// app.use(function(err,req,res,next){
//     console.error(err.stack);
//     res.type('text/plain');
//     res.status(500);
//     res.send('500- Server Error');
// });

//view engine
app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'views/pages'))

//body-parse middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/', function(req,res){
    res.render('index', {
        title: 'paula'
    });
})

app.listen(3000, function(){
    console.log('listening to port 3000')
});

// app.listen(app.get('port'), function(){
//     console.log('Express started on http://localhost:' + app.get('port') +'; press Ctrl-C to terminate.');

// });


