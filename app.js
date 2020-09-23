var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const path = require("path");
var cookieParser = require('cookie-parser');
var session = require('express-session');

app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));
var port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "public")));

var indexRoutes = require("./routes/index");
var payerRoutes = require("./routes/payer");
var APIPhoneRoute = require("./API/routes/phone.api.routes");
var searchRoutes = require("./routes/search");
var typeRoutes = require("./routes/type_phone");
var admin = require("./routes/admin");
const { response } = require("express");

app.use("/acceuil", indexRoutes);
app.use("/", payerRoutes);
app.use("/API/phone", APIPhoneRoute);
app.use("/search", searchRoutes);
app.use("/type", typeRoutes);
app.use("/admin", admin);

app.listen(port, function () {
  console.log("Server listening on port " + port);
});
