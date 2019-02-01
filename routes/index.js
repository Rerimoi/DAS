const express = require('express')
const router = express.Router()  
const { body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
const User = require('../public/scripts/mongo.js');





// pages routes
router.get('/', function(req,res){res.render('dashboard', {title: 'Class Attendance Tracking System'})})
router.get('/login', function(req,res){res.render('login',{title: 'Login page'})})
router.get('/account', function(req,res){res.render('account', {title: 'Login page'})})

// lecturers routes
router.get('/lecturer', function(req,res){res.render('lecturerHome', {title: 'Welcome Lecturer'})})
router.get('/lecturer/register-units', function(req,res){res.render('registerUnits', {title: 'Units'})})

router.get('/session', function(req,res){res.render('session', {title: 'Class'})})


// student's route
router.get('/student', function(req,res){res.render('index', {title: 'Welcome student'})})

router.post ('/account', function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    } else {
        let newUser = {
            user_id: req.body.user_id,
            email: req.body.email,
            password: req.body.password,
            confirm_password: req.body.confirm_password,
        };
        // newUser.save(newUser, function (err, User) {
        //     res.send(User)
        //     if (err) {
        //         console.log(err);
                
        //     }
        //     res.redirect('/account')
        // })
        console.log(newUser);  
    }

})
module.exports = router
