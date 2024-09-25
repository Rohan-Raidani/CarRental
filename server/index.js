const dotenv = require('dotenv')
dotenv.config()

const express = require('express');
const app = express();

const db = require('./config/user');
// const Car = require('./models/car')

const cors = require('cors');
const bodyParser = require('body-parser');

const port = process.env.PORT;

// Middleware
app.use(cors());
// app.use(bodyParser.json());
app.use(bodyParser.json({ limit: '10mb' })); // Adjust the limit as needed
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true })); // Also set for URL-encoded data


app.use('/', require('./routes/index'))
app.use('/admin',require('./routes/admin'))

app.listen(port , function(err){
    if(err){
        console.log(err);        
    }else{
        console.log(`server running on port: ${port}`);
        
    }
})