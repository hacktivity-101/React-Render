// import
const express = require('express');
const cors = require('cors');

// initialize
const app = express();
const port = 5000;

const userRouter = require('./routers/userRouter');
const feedbackRouter = require('./routers/FeedbackRouter');

// middleware
app.use(cors({
    origin: ['http://localhost:3000']
}));

// convert json to js
app.use(express.json());

app.use('/user', userRouter);
app.use('/feedback', feedbackRouter);


app.use(express.static('./static/uploads'));
app.use(express.static('./static/resources'));

// start express server


app.listen(port, () => { console.log('express server started') });