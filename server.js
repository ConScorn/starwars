// dependencies
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Data
const characters = [
    {
      routeName: 'yoda',
      name: 'Yoda',
      role: 'Jedi Master',
      age: 900,
      forcePoints: 2000,
    },
    {
      routeName: 'darthmaul',
      name: 'Darth Maul',
      role: 'Sith Lord',
      age: 200,
      forcePoints: 1200,
    },
    {
      routeName: 'obiwankenobi',
      name: 'Obi Wan Kenobi',
      role: 'Jedi Knight',
      age: 60,
      forcePoints: 1350,
    },
  ];

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Star Wars Page!')
});

// get our entire databsae
app.get('/api/characters', (req, res) => {
  return res.json(characters)
});

app.get('/:character', (req, res) => {
  const chosen = req.params.character;
  console.log(chosen);

  res.end();
});

app.get('/api/characters/:character', (req, res) => {
  const chosen = req.params.character;
});

app.post('/api/characters/', (req, res) =>  {
  // const newCharacter = ();
})


// start the server
app.listen(PORT, () => console.log(`App is listening on PORT ${PORT}`));