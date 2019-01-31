const express = require('express')
const router = express.Router()  
const { body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
const mongoose =require('mongoose')





// pages routes
router.get('/', function(req,res){res.render('dashboard', {title: 'Class Attendance Tracking System'})})
//dashboard route
// router.get('/dashboard', function(req,res){res.render('dashboard',{title: 'Class Attendance System'})})
router.get('/login', function(req,res){res.render('login',{title: 'Login page'})})
router.get('/account', function(req,res){res.render('account', {title: 'Login page'})})
// router.get('/login/student', function(req,res){res.render('index', {title: 'Login student page'})})
// router.get('/signup/lecturer', function(req,res){res.render('index', {title: 'Signup lecturer page'})})
// router.get('/singup/student', function(req,res){res.render('index', {title: 'Login student page'})})



// lecturers routes
router.get('/lecturer', function(req,res){res.render('lecturerHome', {title: 'Welcome Lecturer'})})
router.get('/lecturer/register-units', function(req,res){res.render('registerUnits', {title: 'Units'})})
// router.get('/lecturer/report', function(req,res){res.render('report', {title: 'Overall Report'})})
router.get('/session', function(req,res){res.render('session', {title: 'Class'})})
// router.get('/lecturer/class/start', function(req,res){res.render('', {title: 'Class Session'})})
// router.get('/lecturer/class/report', function(req,res){res.render('', {title: 'Class Report'})})
// router.get('/session', function(req,res){res.render('session', {title: 'Welcome Lecturer'})})

// student's route

router.get('/student', function(req,res){res.render('index', {title: 'Welcome student'})})

router.post ('/account', 

function (req, res) {
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
        // hey, we don't know how to communicate with a collection aready in mongo atlas
        // do we really have to create a schema or there's a way we can post directly to an existing collection?
        // newUser.save()
           console.log(newUser);
         
        

        
    }
});

module.exports = router
