const express = require('express');

const app = express();

app.get('/posts', (req, res, next) => {
    console.log('You made a request to the "post" route');
    res.status(200).send("Welcome to the posts page!");
});

app.listen(3000, () => {
    console.log("Server running on port 3000")
});