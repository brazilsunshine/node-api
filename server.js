const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.get('/', (req, res) => {
    res.send('hello api')
})

app.get('/blog', (req, res) => {
    res.send('hello blog sthef')
})

mongoose.connect("mongodb+srv://sthefanesoliveiraaa:YU1Ti5nW5UcSNrYZ@cluster0.akany63.mongodb.net/Node-API?retryWrites=true&w=majority")
.then(() => {
    console.log('connected to mongoDB');
    app.listen(3000, () => {
        console.log('node api app running')
    })
 })
.catch(error => {
    console.log('error', error);
});
