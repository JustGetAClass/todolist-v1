const express = require("express");
// const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	var date = new Date();
	var dayIndex = date.getDay();
	var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var day = daysOfWeek[dayIndex];
	res.render("list", {kindOfDay: day});

});

app.listen(port, () => {
	console.log(`listening at port ${port}`);
});
