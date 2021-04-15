const express = require('express');
var products = require("./product.router.js");
var cors = require('cors')
const { routeNotFound } = require("./middlewares/route-Not-Found.middleware")
const { errorHandler } = require("./middlewares/error-handler.middeleware");
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors())

var authentication = function(req, res, next) {
  const crredential = req.query
  console.log({ crredential });
  const { userName, password } = req.query;
  
  if (userName === "ashish" && password === "password") {
    next();
  }
  else {
    res.send({ "login": "failed", message: "dead" });
  }
}

app.use("/products/:id", authentication);
app.use("/products", products);




app.get('/', (req, res) => {
  throw new Error("Something wrong in the server");
  res.send('Hello Express app!')
});




app.use(routeNotFound);
app.use(errorHandler);


app.listen(port, () => {
  console.log('server started at port', port);
});