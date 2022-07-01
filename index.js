const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const todos = require('./routes/routes');


//connect to mongodb ..
mongoose.connect(process.env.DB_CONNECT)
.then(()=> console.log("Database connected"))
.catch(err => console.log(err))


app.use('/',todos);

  
app.listen(port, () => console.log(`Listening on port ${port}`));