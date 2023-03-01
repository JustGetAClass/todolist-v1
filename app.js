const express = require("express");
// const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

let todos = ["Buy Food", "Cook Food", "Eat Food"];
let worktodos = [];

app.get("/", (req, res) => {
	let date = new Date();
	let options = {
		weekday: "long",
		day: "numeric",
		month: "long",
	};

	let day = date.toLocaleDateString("en-US", options);
	res.render("list", { listTitle: day, newtodo: todos });
});

app.post("/", (req, res) => {
	let todo = req.body.todo;
	if (req.body.list === "Work List") {
		worktodos.push(todo);
		res.redirect("/work");
	} else {
		todos.push(todo);
		res.redirect("/");
	}
});

app.get("/work", (req, res) => {
	res.render("list", { listTitle: "Work List", newtodo: worktodos });
});

app.get("/about", (req, res) => {
	res.render("about");
});

app.listen(port, () => {
	console.log(`listening at port ${port}`);
});
