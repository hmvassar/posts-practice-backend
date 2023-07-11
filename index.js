const express = require('express');

const app = express();

app.get('/post', (req, res, next) => {
    console.log('You made a request to the "post" route');
});

app.listen(3000, () => {
    console.log("Server running on port 3000")
});