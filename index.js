require("dotenv/config");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 6969;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

require("./contactUs/route/route")(app);
require("./course/route/route")(app);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
