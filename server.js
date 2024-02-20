const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const ejs = require('ejs');
const aqiModel = require('./models/model.js');

app.set('view engine','ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://chaudharyaditya41:Z67gI1uJnrGCnHuY@cluster0.jgngtnq.mongodb.net/testingAPIsDb5?retryWrites=true&w=majority', {
    usenewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MongoDB is connected"))
    .catch(err => console.log(err))

app.get('/', async (req,res)=>{
    console.log("hello");
    const documents = await aqiModel.find();
    console.log(documents);
    res.render('index',{documents});
})

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on Port', (process.env.PORT || 3000))
});