//require app dependencies and helpers
const path = require("path");
const express = require("express");
const routes = require("./routes");
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3001;
//create handlebars.js engine object
const hbs = exphbs.create({});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));

//equip app to use handlebars
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
