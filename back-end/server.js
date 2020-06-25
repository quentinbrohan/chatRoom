/* eslint-disable prefer-destructuring */
/*
 * Require
 */
const express = require('express');
const bodyParser = require('body-parser');
const Server = require('http').Server;
const socket = require('socket.io');


/*
 * Vars
 */
const app = express();
const server = Server(app);
const io = socket(server);
const port = 3001;

const db = {
  users: {
    'q@brh.fr': {
      password: 'aqw',
      username: 'Quentin',
      avatar: 'avatar6.jpg',
    },
    'martin.dupont@baguette.fr': {
      password: 'chocolatine',
      username: 'Martin',
      color: '#c124e3',
      avatar: 'avatar8.jpg',
    },
    'jane.doe@fbi.gouv': {
      password: 'blindspot',
      username: 'Jane',
      color: '#d1d1d1',
      avatar: 'avatar1.jpg',

    },
    'archer.sterling@duchesse.gouv': {
      password: 'LANA',
      username: 'Archer',
      color: '#f0f',
      avatar: 'avatar2.jpg',
    }
  }
};

/*
 * Express
 */
app.use(bodyParser.json());
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  // response.header('Access-Control-Allow-Credentials', true);
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});



// Page d'accueil du serveur : GET /
app.get('/', (request, response) => {
  response.send(`
    <div style="margin: 5em auto; width: 400px; line-height: 1.5">
      <h1 style="text-align: center">Hello!</h1>
      <p>Si tu vois ce message, c'est que ton serveur est bien lancé !</p>
      <div>Désormais, tu dois venir utiliser l'API</div>
      <ul style="display: inline-block; margin-top: .2em">
        <li><code>POST http://localhost:${port}/login</code></li>
        <li><code>POST http://localhost:${port}/forgot</code></li>
        <li><code>GET http://localhost:${port}/theme/{email}</code></li>
        <li><code>GET http://localhost:${port}/avatar/{email}</code></li>
      </ul>
    </div>
  `);
});

/*
 * Theme json
 */
app.get('/theme/:email', (request, response) => {
  const email = request.params.email;
  if (!email) {
    console.log('<< 400 BAD_REQUEST');
    response.status(400).end();
  }

  let color;
  if (db.users[email] && db.users[email].color) {
    color = db.users[email].color;
  }

  // Réponse HTTP adaptée.
  if (color) {
    console.log('<< 200 OK', email, color);
    response.send(color);
  }
  else {
    console.log('<< 401 UNAUTHORIZED');
    response.status(401).end();
  }
});

/*
 * Avatar json
 */
app.get('/avatar/:email', (request, response) => {
  const email = request.params.email;
  if (!email) {
    console.log('<< 400 BAD_REQUEST');
    response.status(400).end();
  }

  let avatar;
  if (db.users[email] && db.users[email].avatar) {
    avatar = db.users[email].avatar;
  }

  // Réponse HTTP adaptée.
  if (avatar) {
    console.log('<< 200 OK', email, avatar);
    response.send(avatar);
  }
  else {
    console.log('<< 401 UNAUTHORIZED');
    response.status(401).end();
  }
});

/*
 * Socket.io
 */
let id = 0;
io.on('connection', (ws) => {
  console.log('>> socket.io - connected');
  ws.on('send_message', (message) => {
    // Date de l'envoi message
    var currentdate = new Date();
    var date = currentdate.getDate() + "/"
    + (currentdate.getMonth()+1)  + "/"
    + currentdate.getFullYear() + " @ "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":"
    + currentdate.getSeconds();
    // eslint-disable-next-line no-plusplus
    message.id = ++id;
    message.date = date;
    
    io.emit('send_message', message);
  });
});

// Login avec vérification : POST /login
app.post('/login', (request, response) => {
  console.log('>> POST /login', request.body);

  // Extraction des données de la requête provenant du client.
  const { email, password } = request.body;

  // Vérification des identifiants de connexion proposés auprès de la DB.
  let username;
  let avatar;
  if (db.users[email] && db.users[email].password === password) {
    username = db.users[email].username;
    avatar = db.users[email].avatar;
  }

  // Réponse HTTP adaptée.
  if (username) {
    console.log('<< 200 OK', username);
    response.send({username, avatar});
  }
  else {
    console.log('<< 401 UNAUTHORIZED');
    response.status(401).end();
  }
});

// Mot de passe oublié : POST /forgot
app.post('/forgot', (request, response) => {
  const { email } = request.body;
  if (db.users[email]) {
    response.send(db.users[email].username);
  }
  else {
    response.status(400).end();
  }
});

// Déconnexion: POST /logout
app.post('/logout', (req, res) => {
  // TODO session a initialisé et transmettre auparavant
  req.session.destroy();
  res.json({ isConnected: false });
});

/*
 * Server
 */
server.listen(port, () => {
  console.log(`listening on *:${port}`);
});
