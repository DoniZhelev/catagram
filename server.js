const express = require('express');
const handlebars  = require('express-handlebars');

const checkCatIdMiddleware = require('./middlewares/middleware');
const logger = require('./middlewares/loggerMiddleware');

const app = express();

app.use(logger)
app.engine('hbs', handlebars());
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    
    let name = 'gosHo';

    res.render('home', { layout: false, name: name })
});

app.get('/download', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/cats', (req, res) =>{
    res.redirect('/')
})

app.get('/cats/:catId',checkCatIdMiddleware, (req, res) =>{
    console.log(req.params);
    res.send(`You are looking at profile of ${req.params.catId}`)
})

app.post('/cats', (req, res) => {
    console.log('create cat');
   res.status(201).res.send('cat Created!')
});

app.listen(5000, () => console.log(`Server is running on port 5000`))