const express = require('express');
const path = require('path');
const route = require('./routes');
const handlebars = require('express-handlebars');
const hbs = require('handlebars');
const app = express();
const port = 3380;

const db = require('./config/db');
//Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);
app.set(
    'view engine',
    'hbs',
);

hbs.registerHelper("sum", function(a, b)
{
    return parseInt(a) + parseInt(b);
});

app.set('views', path.join(__dirname, 'resources', 'views'));
//console.log(app.get('view'));
console.log('PATH: ', path.join(__dirname, 'resources/views'));

route(app);

app.listen(port, () => console.log(`App listening on port ${port}`));