const express = require("express"); 
    morgan = require("morgan");
    fs = require("fs");
    path = require("path");

const app = express();
app.use(morgan("common")); // Morgan to log requests.
app.use(express.static("public")); // Serves static files from public folder in project directory.

app.get("/", (req, res) => {
    res.send("Welcome to myFlix!")
});

app.get("/documentation", (req, res) => {
res.send("This is the documenation page for the myFlix API.");
});

const topMovies24 = [
    {ranking: "1", title: "Nickel Boys", year: 2024 },
    {ranking: "2", title: "Hard Truths", year: 2024 },
    {ranking: "3", title: "Challengers", year: 2024 },
    {ranking: "4", title: "Janet Planet", year: 2024 },
    {ranking: "5", title: "Dune: Part Two", year: 2024 },
    {ranking: "6", title: "I Saw the TV Glow", year: 2024 },
    {ranking: "7", title: "Anora", year: 2024 },
    {ranking: "8", title: "The Brutalist", year: 2024 },
    {ranking: "9", title: "Trap", year: 2024 },
    {ranking: "10", title: "Evil Does Not Exist", year: 2024 }   
];

app.get("/movies", (req, res) => {
    res.json(topMovies24);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Uh oh.. Something broke!");
});

app.listen(8080, () => {
    console.log("My app is listening on port 8080.");
});