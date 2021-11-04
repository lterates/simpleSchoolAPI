const express = require('express'); 
const app = express(); 
const port = 3000;
const router_students = require('./routes/routes_students'); 
const router_teachers = require('./routes/routes_teachers'); 

app.use(express.json()); 
app.use('/students', router_students)
app.use('/teachers', router_teachers)
app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log('Server Running on http://localhost' + ':' + port)
}) 