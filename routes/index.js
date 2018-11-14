const express = require('express')
const router = express.Router()


// pages routes
router.get('/', function(req,res){res.render('home', {title: 'Class Attendance Tracking System'})})
router.get('/login', function(req,res){res.render('login', {title: 'Login page'})})
// router.get('/login/student', function(req,res){res.render('index', {title: 'Login student page'})})
// router.get('/signup/lecturer', function(req,res){res.render('index', {title: 'Signup lecturer page'})})
// router.get('/singup/student', function(req,res){res.render('index', {title: 'Login student page'})})
// router.get('/lecturer', function(req,res){res.render('index', {title: 'Welcome Lecturer'})})
// router.get('/student', function(req,res){res.render('index', {title: 'Welcome student'})})

module.exports = router