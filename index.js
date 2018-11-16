const express = require('express');
const app = express();
const port = process.env.PORT || 5000

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    var path = req.path;
    res.locals.path = path;
    res.render('index');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
