// import
const express = require('express');
const cors = require('cors');

// initialize
const app = express();

const userRouter = require('./routers/userRouter');
const feedbackRouter = require('./routers/FeedbackRouter');

// middleware
app.use(cors({
    origin: 'http://localhost:3000'
}));

// convert json to js
app.use(express.json());

app.use('/user', userRouter);
app.use('/feedback', feedbackRouter);

const port = 5000;

// start express server

app.get('/', (req, res) => {
    res.send('response from express');
});

app.get('/add', (req, res) => {
    res.send('add response from express');
});

app.listen(port, () => { console.log('express server started') });