const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const Sequelize = require ('sequelize');
const hbs = require('express-handlebars');

const PORT = process.env.PORT || 4040;
const app = express();
const routes = require('./routes')

// Define middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);

// view engine setup
const hbsHelpers = hbs.create({
  extname: 'hbs', 
  helpers: require('./controllers/helpers/handlebars').helpers,
  defaultLayout: 'index', 
  layoutsDir: __dirname + '/views/'
});
app.engine('.hbs', hbsHelpers.engine)
app.use(express.static(path.join(__dirname, 'views')));
app.set('view engine', 'hbs')

// listen on port PORT
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});