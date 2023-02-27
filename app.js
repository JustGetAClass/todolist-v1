const express = require("express");
// const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.send("Yo Wassup");
});

app.listen(port, () => {
	console.log(`listening at port ${port}`);
});
