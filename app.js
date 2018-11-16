const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/public'));
// app.get('/', (req, res) => res.send('Hello World!'))

app.get('/', function(req, res){
    var path = req.path;
    res.locals.path = path;
    res.render('index');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
