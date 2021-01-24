const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log("Hello from console");

    res.send('Hello world from exrepss!')
});

app.get('/cats/:catId', (req, res) =>{
    console.log(req.params);
    res.send(`You are looking at profile of ${req.params.catId}`)
})

app.post('/cats', (req, res) => {
    console.log('create cat');
    res.send('cat Created!')
});

app.listen(5000, () => console.log(`Server is running on port 5000`))