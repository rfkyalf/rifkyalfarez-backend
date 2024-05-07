const express = require('express');
const mongoose = require('mongoose');
const aboutRoute = require('./routes/about.route');
const experienceRoute = require('./routes/experience.route');
const projectRoute = require('./routes/project.route');
const stackRoute = require('./routes/stack.route');

const app = express();

const port = 5000;
const mongoURL =
  'mongodb+srv://alfarez2325:Yamete123@express-mongo.kwgayus.mongodb.net/rifkyalfarez-backend?retryWrites=true&w=majority&appName=express-mongo';

// Middleware
app.use(express.json());

// Connect to mongoDB
mongoose
  .connect(mongoURL)
  .then(() => {
    console.log('Successfully connected to mongoDB');
    app.listen(port, () => {
      console.log(`Server is running on port http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log('Failed to connect to mongoDB');
    console.log(error);
  });

// Get data
app.get('/', (req, res) => {
  res.send('Hello, this is rifkyalfarez-backend');
});

// Routes
app.use('/api/abouts', aboutRoute);
app.use('/api/experiences', experienceRoute);
app.use('/api/projects', projectRoute);
app.use('/api/stacks', stackRoute);
