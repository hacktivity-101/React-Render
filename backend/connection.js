const mongoose = require('mongoose');

const url = "mongodb+srv://hacktivity:2136@cluster0.qa8caw4.mongodb.net/Templating-Engine?retryWrites=true&w=majority&appName=Cluster0"

//asynchronous function
mongoose.connect(url)
    .then((result) => {
        console.log('database connected');
    }).catch((err) => {
        console.log(err);
    });

    module.exports = mongoose;

