const port = process.env.PORT || 3001;
let express = require('express');
let cors = require('../src/middlewares/cors');
let mongoose = require('mongoose');
let bodyParser = require('body-parser')
let routes = require('./routes');
let { auth } = require('./middlewares/authMiddleware');
let app = express();
mongoose.connect("mongodb://localhost:27017/clothes")
    .then(() => {
        console.log('db connected!')
    });

mongoose.connection.on('error', (error) => {
    console.log('DB error =>', error)
});

app.use(bodyParser.json());

app.use(cors());
app.use(auth);
app.get('/', (req, res) => {
    res.json({ text: "It'/ working" })
})
app.use(routes);

app.listen(port, () => console.log('App is listening on port ' + port));