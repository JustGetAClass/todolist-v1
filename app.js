const express = require("express");
// const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))

let todos = ["Buy Food", "Cook Food", "Eat Food"];

app.get("/", (req, res) => {
	let date = new Date();
	let options = {
		weekday: "long",
		day: "numeric",
		month: "long",
	};

	let day = date.toLocaleDateString("en-US", options);
	res.render("list", {kindOfDay: day, newtodo: todos})
});

app.post("/", (req, res) => {
	todo = req.body.todo;
	todos.push(todo)
	res.redirect("/")
});

app.listen(port, () => {
	console.log(`listening at port ${port}`);
});
