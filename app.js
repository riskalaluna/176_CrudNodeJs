const express = require('express');
const app = express();
const todoRoutes = require('./routes/todo.js');
const port = 80;

app.use(express.json());
app.use('/todos', todoRoutes);

app.set('view engine', 'ejs');

//Memastikan file index.ejs di dalam folder views
app.get('/', (req, res) => {
    res.render('index'); 
});

//Memastikan file contact.ejs di dalam folder views
app.get('/contact', (req, res) => {
    res.render('contact'); 
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
