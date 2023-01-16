const express = require('express');
const app = express();
const body=require('body-parser')

// Import routes
const blogRoute = require('./routes/blog');


//Router MIddlewares
app.use(express.json());
app.use(body.json())
app.use(express.urlencoded());
app.use('/', blogRoute);




module.exports = app;
