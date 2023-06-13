const express = require('express');
require('dotenv').config()
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

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