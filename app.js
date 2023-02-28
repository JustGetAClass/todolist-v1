const express = require("express");
// const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	var today = new Date();
	var dayOfTheWeek = new Date().toLocaleString("en-us", { weekday: "long" });

	if (today.getDay() === 6 || today.getDay() === 0) {
		res.write(`<h1>Yaaaay its a ${dayOfTheWeek}</h1>`);
		res.write("Party time");
	} else {
		// res.write(`<h1>Booooo its a ${dayOfTheWeek}</h1>`);
		// res.write("worky time");
        res.sendFile(`${__dirname}/index.html`);
	}

	// res.send();
});

app.listen(port, () => {
	console.log(`listening at port ${port}`);
});
