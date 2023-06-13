const express = require('express');
require('dotenv').config()
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Student = require('./model/student');
const app = express();
const PORT = process.env.PORT || 3001;
mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://nguyentiendung159357:exvFKFwVryKVzAr2@cluster0.iehlqg1.mongodb.net/')

app.get('', (req,res) =>{
  res.send("home")
})

app.get('/news', (req,res) =>{
  res.send("news")
})
// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/api/students', require('./routes/students'));
app.use('/api/classes', require('./routes/classes'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});