const express = require('express');
const path = require('path');

const app = express();
const port = 3380;
const db = require('./src/config/db');
//Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());


app.listen(port, () => console.log(`App listening on port ${port}`));