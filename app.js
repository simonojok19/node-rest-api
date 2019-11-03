var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Welcome to My Api')
});

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})