const express = require('express');
var bodyParser = require('body-parser');

const app = express();

const getRouter = require('./src/routes/get');
const postRouter = require('./src/routes/post');

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({ extended: true }))

app.use('/get', getRouter);
app.use('/post', postRouter);

app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 대기 중')
});