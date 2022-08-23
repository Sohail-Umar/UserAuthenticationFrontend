const express = require("express");
const userRoutes = require("./Routes/userRoutes")
const connectDatabase = require("./Database")
require("dotenv").config()
const cors = require("cors");

const app = express();
connectDatabase();

app.use(express.json())
app.use(userRoutes);
app.use(cors());

// app.get("/api", (req, res) => {
//     res.json({ message: "Hello from server!" });
// });

app.listen(process.env.PORT, () => {
    console.log(`Server Started at port ${process.env.PORT}`)
})