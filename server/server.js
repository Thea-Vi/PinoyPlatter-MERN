const express = require("express");
const app = express();
const db = require('./Config/config');
const Food = require("./Models/food.model");
port = 8000;
// -------- imports

// mongodb ---> mongoose
require("./Config/config")

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
const foodsRoute = require('./Routes/food.route')
const usersRoute = require('./Routes/user.route')

// if the link is structured below, send to its appropriate route above
app.use('/api/foods', foodsRoute)
app.use('/api/users', usersRoute)

// checking the server
app.get("/", (req, res) => {
    res.send("Server is now up and running!")
})





app.listen(port, () => console.log(`Listening on port: ${port}`));
