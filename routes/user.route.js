const express = require('express')
const mongoose = require('mongoose');

const User = require('../models/user.schema')

const router = express.Router()
 
//router.get('/add-user',(req,res)=>{

     //res.send('hello')})
     
const fakeData = {
    Name : "maryem",
    Age : 22,
    favoriteFoods : ["crepe","pizza","coucous"]
}

router.get('/add-user',(req,res)=>{
const newPerson = new User(fakeData)
newPerson.save()
.then(()=> res.send("user saved success!!"))
.catch((err)=> console.log(err))
})


router.get('/get-all-users',(req,res)=>{
  User.find()
  .then((data)=> res.json(data))
  .catch((err)=> console.log(err))
})

router.get('/get-all-us',(req,res)=>{
  User.findOne({ Name: "Siwar" })
  .then((data)=> res.json(data))
  .catch((err)=> console.log(err))
})
router.get('/get-all',(req,res)=>{
  User.findById('66b4f2a2f9a6eb1cf160c8b4')
  .then((data)=> res.json(data))
  .catch((err)=> console.log(err))
})


router.get('/get-allh',(req,res)=>{
  const Person = new User(fakeData)
  User.findById('66b4f2a2f9a6eb1cf160c8b4')
  Person.favoriteFoods.push('hamburger');
  Person.save()
  .then((data)=> res.json(data))
  .catch((err)=> console.log(err))
})

router.get('/get-al',(req,res)=>{
  User.findOneAndUpdate({Name:'Siwar',Name:'cycy'})
  .then((data)=> res.json(data))
  .catch((err)=> console.log(err))
})


router.get('/get-remove',(req,res)=>{
  User.findByIdAndDelete('66b4f2a2f9a6eb1cf160c8b2')
  .then((data)=> res.json(data))
  .catch((err)=> console.log(err))
})


router.get('/get-remove-all',(req,res)=>{
  User.deleteMany({ Name:"maryem" })
  .then((data)=> res.json(data))
  .catch((err)=> console.log(err))
})

router.get('/add-userlike', (req, res) => {
  User.find({ favoriteFoods: 'pizza' })
    .sort({ Name: 1 })
    .limit(2)
    .select('-Age')
    .exec() 
    .then((data)=> res.json(data))
    .catch((err)=> console.log(err))

});

  
module.exports=router