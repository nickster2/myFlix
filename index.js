const bodyParser = require("body-parser");
const express = require("express");  
morgan = require("morgan"); 
path = require("path");
uuid = require("uuid");
app = express();

app.use(bodyParser.json());

app.use(morgan("common")); // Morgan to log requests.
app.use(express.static(path.join(__dirname, "public"))); // Serves static files from public folder in project directory.

app.get("/", (req, res) => {
    res.send("Welcome to myFlix!")
});

let users = [
     {
        id: 1,
        name: "John",
        favoriteMovies: []
    },
    {
        id: 2,
        name: "Jane",
        favoriteMovies: ["Challengers"]
    },
    {
        id: 3,
        name: "Alice",
        favoriteMovies: ["Nickel Boys"]
    },
];

app.get("/users", (req, res) => {
    res.json(users);
})

let movies = [
    {Ranking: "1", 
        "Title": "Nickel Boys", 
        "Year": 2024, 
        "Genre": { "Name": "Drama",
        "Description": "Nickel Boys is a 2024 American historical drama film about two Black boys who are sent to a reform school in Florida in the 1960s. The movie is based on Colson Whitehead's Pulitzer Prize-winning novel of the same name."
        },
        "Director":{ "Name": "RaMell Ross",
            "Birth": "1977-01-01",
            "Bio": "RaMell Ross is an American filmmaker and photographer best known for his documentary 'Hale County This Morning, This Evening' (2018), which received critical acclaim and an Academy Award nomination."
          },
    },

    {Ranking: "2", 
        "Title": "Hard Truths", 
        "Year": 2024, 
        "Genre": { "Name": "Comedy",
        "Description": "Hard Truths is a film about a dysfunctional family and the complicated bonds that tie them together. Directed by Mike Leigh, the movie stars Marianne Jean-Baptiste as Pansy, a woman who is constantly angry and critical of everyone around her."
    },

        "Director": {
          "Name": "Mike Leigh",
          "Birth": "1943-02-20",
          "Bio": "Mike Leigh is a British director and screenwriter known for his character-driven films such as 'Secrets & Lies' and 'Vera Drake'. He is recognized for his improvisational style and focus on working-class life."
        }
    },

    {Ranking: "3", 
        "Title": "Ghostlight", 
        "Year": 2024, 
        "Genre": { "Name": "Comedy",
        "Description": "Ghostlight is a 2024 comedy-drama film about a construction worker who joins a local theater's production of Romeo and Juliet. The drama on stage begins to mirror the construction worker's own life."
        },
        "Director": {
        "Name": "Kelly O'Sullivan",
        "Birth": "1983-01-01",
        "Bio": "Kelly O'Sullivan is an American actress and screenwriter, best known for writing and starring in the indie film 'Saint Frances' (2019), which she co-created with Alex Thompson."
        }
    },

    {Ranking: "4", 
        "Title": "Challengers", 
        "Year": 2024, 
        "Genre": { "Name": "Romance",
        "Description": "Challengers is a 2024 movie about a love triangle between three former tennis professionals. The movie stars Zendaya as Tashi, a former tennis prodigy who coaches her husband, Art, a famous tennis player. The movie also stars Josh O'Connor and Mike Faist."
        },
        "Director": {
        "Name": "Alex Thompson",
        "Birth": "1986-01-01",
        "Bio": "Alex Thompson is an American film director and producer. He co-directed the critically acclaimed indie film 'Saint Frances' (2019) with Kelly O'Sullivan."
        }
    },

    {Ranking: "5", 
        "Title": "Janet Planet",
        "Year": 2024, 
        "Genre": {"Name": "Drama",
        "Description": "Janet Planet is a 2023 drama film about an 11-Year-old girl named Lacy and her single mother, Janet, in the summer of 1991. The film is set in rural Western Massachusetts and was written and directed by Pulitzer Prize-winning playwright Annie Baker."
        },
        "Director": {
        "Name": "Luca Guadagnino",
        "Birth": "1971-08-10",
        "Bio": "Luca Guadagnino is an Italian director known for visually lush films such as 'Call Me by Your Name' and 'Suspiria' (2018), often exploring themes of desire and identity."
        }
    },

    {Ranking: "6", 
        "Title": "Dune: Part Two", 
        "Year": 2024, 
        "Genre": {"Name": "Action",
        "Description": "'Dune: Part Two' picks up where the first film left off, following Paul Atreides as he deepens his alliance with the Fremen people on the desert planet Arrakis, seeking revenge against the Harkonnens who destroyed his family while grappling with his prophetic visions and a growing love for Chani, a Fremen woman; his journey forces him to choose between personal love and the fate of the universe as he embraces his destiny as the prophesied 'Lisan al Gaib' and potentially ignites a galactic war."
        },
        "Director": {
        "Name": "Annie Baker",
        "Birth": "1981-04-10",
        "Bio": "Annie Baker is an American playwright and filmmaker. Known for her Pulitzer Prize-winning plays, she made her directorial debut with the film 'Janet Planet' (2023)."
        }
    },

    {Ranking: "7", 
        "Title": "I Saw the TV Glow", 
        "Year": 2024, 
        "Genre": { "Name": "Horror",
          "Description": "Teenager Owen is just trying to make it through life in the suburbs, when his classmate introduces him to a mysterious late-night TV show-one which conveys a vision of a supernatural world beneath their own. In the pale glow of the television, Owen's view of reality begins to crack."
        },
        "Director": {
      "Name": "Jane Schoenbrun",
      "Birth": "1986-01-01",
      "Bio": "Jane Schoenbrun is a non-binary American filmmaker and writer known for experimental horror films such as 'We're All Going to the World's Fair' (2021) and 'I Saw the TV Glow' (2024)."
        }
    },

    {Ranking: "8", 
        "Title": "Anora", 
        "Year": 2024, 
        "Genre": {"Name": "Comedy",
        "Description": "A young escort from Brooklyn meets and impulsively marries the son of a Russian oligarch. Once the news reaches Russia, her fairy tale is threatened as his parents set out for New York to get the marriage annulled."
        },
        "Director": {
        "Name": "Sean Baker",
        "Birth": "1971-02-26",
        "Bio": "Sean Baker is an American filmmaker noted for his naturalistic and socially conscious films like 'The Florida Project' and 'Tangerine', often spotlighting marginalized communities."
        }
    },

    {Ranking: "9", 
        "Title": "The Brutalist", 
        "Year": 2024, 
        "Genre": { "Name": "Epic", 
        "Description": "The film follows the life of fictional architect László Tóth (Brody) after the Holocaust and the end of World War II as he integrates into the United States as a Hungarian-Jewish immigrant. We see the different points of his time in America and the people in his life as they come and go."
        },
        "Director": {
        "Name": "Brady Corbet",
        "Birth": "1988-08-17",
        "Bio": "Brady Corbet is an American actor and director known for visually ambitious, often political films such as 'The Childhood of a Leader' and 'Vox Lux'."
        }
    },

    {Ranking: "10", 
        "Title": "Trap", 
        "Year": 2024, 
        "Genre": { "Name": "Horror",
        "Description": "Trap is a 2024 psychological thriller film about a serial killer who attends a concert with his daughter, unaware that the concert is a police trap to catch him. The movie was written, directed, and produced by M. Night Shyamalan."
        },
        "Director": {
        "Name": "M. Night Shyamalan",
        "Birth": "1970-08-06",
        "Bio": "M. Night Shyamalan is an Indian-American filmmaker famous for his twist-ending thrillers such as 'The Sixth Sense', 'Unbreakable', and 'Split'."
        }
    },
];

//CREATE
app.post("/users", (req, res) => {
    console.log("Recieved a POST request to /users", req.body);
    // Check if the request body contains a name
    // If it does, create a new user object
    // and add it to the users array
    // If it doesn't, send a 400 response with an error message
    const newUser = req.body;

    if (newUser.name) {
        newUser.id = uuid.v4();
        users.push(newUser);
        res.status(201).json(newUser)
    } else {
        res.status(400).send("Username required!")
    }
});

// UPDATE
app.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const updatedUser = req.body;
    
    let user = users.find( user => user.id == id);

    if (user) {
        user.name = updatedUser.name;
        res.status(200).json(user);
    } else {
        res.status(400).send("There is no such user.")
    }
});

// CREATE
app.put("/users/:id/:movieTitle", (req, res) => {
    const { id, movieTitle } = req.params;
    
    let user = users.find( user => user.id == id);

    if (user) {
        user.favoriteMovies.push(movieTitle);
        res.status(200).send(`Added ${movieTitle} to user ${id}'s list of favorite movies.`);
    } else {
        res.status(400).send("There is no such user.")
    }
});

// DELETE
app.delete("/users/:id/:movieTitle", (req, res) => {
    const { id, movieTitle } = req.params;
    
    let user = users.find( user => user.id == id);

    if (user) {
        user.favoriteMovies = user.favoriteMovies.filter(title => title !== movieTitle);
        res.status(200).send(`Removed ${movieTitle} from user ${id}'s list of favorite movies.`);
    } else {
        res.status(400).send("There is no such user.")
    }
});

// DELETE
app.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    
    let user = users.find( user => user.id == id);

    if (user) {
        users = users.filter(user => user.id != id);
        res.status(200).send(`User ${id} has been deleted.`);
    } else {
        res.status(400).send("There is no such user.")
    }
});


// READ
app.get("/movies", (req, res) => {
    res.status(200).json(movies);
});

// READ
app.get("/movies/:title", (req, res) => {
    const { title } = req.params;
    const movie = movies.find(movie => movie.Title === title );

    if (movie) {
    res.status(200).json(movie);
    } else {
        res.status(400).send("There is no such movie here.")
    }
})

// READ
app.get("/movies/genre/:genreName", (req, res) => {
    const { genreName } = req.params;
    const genre = movies.find(movie => movie.Genre.Name === genreName ).Genre;

    if (genre) {
    res.status(200).json(genre);
    } else {
        res.status(400).send("There is no such genre here.")
    }
})

// READ
app.get("/movies/directors/:directorName", (req, res) => {
    const { directorName } = req.params;
    const director = movies.find(movie => movie.Director.Name === directorName ).Director;

    if (director) {
    res.status(200).json(director);
    } else {
        res.status(400).send("There is no such director here.")
    }
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Uh oh.. Something broke!");
});

app.listen(8080, () => {
    console.log("My app is listening on port 8080.");
});