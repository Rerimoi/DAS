const express = require('express')
const router = express.Router()


// pages routes
router.get('/', function(req,res){res.render('dashboard', {title: 'Class Attendance Tracking System'})})
//dashboard route
// router.get('/dashboard', function(req,res){res.render('dashboard',{title: 'Class Attendance System'})})
router.get('/account', function(req,res){res.render('account', {title: 'Login page'})})
// router.get('/login/student', function(req,res){res.render('index', {title: 'Login student page'})})
// router.get('/signup/lecturer', function(req,res){res.render('index', {title: 'Signup lecturer page'})})
// router.get('/singup/student', function(req,res){res.render('index', {title: 'Login student page'})})



// lecturers routes
router.get('/lecturer', function(req,res){res.render('lecturerHome', {title: 'Welcome Lecturer'})})
router.get('/lecturer/register-units', function(req,res){res.render('registerUnits', {title: 'Units'})})
// router.get('/lecturer/report', function(req,res){res.render('report', {title: 'Overall Report'})})
router.get('/lecturer/class', function(req,res){res.render('class', {title: 'Class'})})
// router.get('/lecturer/class/start', function(req,res){res.render('', {title: 'Class Session'})})
// router.get('/lecturer/class/report', function(req,res){res.render('', {title: 'Class Report'})})

// student's route

router.get('/student', function(req,res){res.render('index', {title: 'Welcome student'})})

module.exports = router
