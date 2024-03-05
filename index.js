const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    try {
        res.render('home')
    } catch (error) {
        console.error(error);
    }
});

app.get('/about', (req, res) => { 
    try {
        res.render('about')
    } catch (error) {
        console.error(error);
    }
})

app.get('/cars', (req, res) => { 
    try {
        res.render('cars')
    } catch (error) {
        console.error(error);
    }
})

app.get('/contact', (req, res) => { 
    try {
        res.render('contact')
    } catch (error) {
        console.error(error);
    }
})

app.get('/drivers', (req, res) => { 
    try {
        res.render('drivers')
    } catch (error) {
        console.error(error);
    }
})

app.get('/rental', (req, res) => { 
    try {
        res.render('rental')
    } catch (error) {
        console.error(error);
    }
})

app.listen(3000, () => {
    console.log('server running');
})