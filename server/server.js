const express = require("express");
// const db = require("./Config/config")
// const cors = require("cors")
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
// app.use(cors())

const foodsRoute = require('./Routes/food.route')

app.use('/api/foods', foodsRoute)

app.get("/", (req, res) => {
    res.send("Server is now up and running!")
})




// const Routes = require("./Routes/food.route")
// Routes(app)


app.listen(port, () => console.log(`Listening on port: ${port}`));
