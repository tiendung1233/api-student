const express = require('express');
require('dotenv').config()
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Class = require('./model/class')
const app = express();
const PORT = process.env.PORT || 3000;
mongoose.set('strictQuery', false)

// const connectDB = async () =>{
//   try {
//      await mongoose.connect(process.env.MONGO_URI);
//     console.log("connect mongodb")
    
//   } catch (error) {
//     console.log(error);
//     process.exit(1)
//   }
// }

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.get('', (req,res) =>{
  res.send("home")
})

app.get('/add-class', async (req,res) =>{
  try {
    await Class.insertMany([
    {
      name: 'dung',
      teacher: 'heni'
    },
    {
      name: 'dung1',
      teacher: 'heni1'
    }
    ])
  } catch (error) {
    console.log(error);
  }
})
 
app.get('/class', async (req,res) =>{
  const classes =  await Class.find()
  if(classes){
    res.json(classes)
  }else{
    res.send('something went')
  }

})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// MongoDB connection
// mongoose.connect('mongodb://localhost:27017/student-class-api', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((err) => {
//     console.error('Error connecting to MongoDB', err);
//   });

// // Body-parser middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // Routes
// app.use('/api/students', require('./routes/students'));
// app.use('/api/classes', require('./routes/classes'));

// // Start the server
