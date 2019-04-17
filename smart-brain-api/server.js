const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const signin = require('./controllers/signin');
const register = require('./controllers/register');
const profile = require('./controllers/profile');
const image = require('./controllers/image');


const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'umaryasin',
    password : '',
    database : 'smart-brain'
  }
});

const app = express();

app.use(bodyParser.json());
app.use(cors())

app.get('/', (req, res) => { res.send(database.users) })
app.post('/signin', (req, res) => {signin.handleSignin(req, res, db, bcrypt)})
app.post('/register', (req, res) => {register.handleRegister(req, res, db, bcrypt)})
app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db)})
app.put('/image', (req, res) => {image.handleImage(req, res, db)})
app.post('/imageurl', (req, res) => {image.handleApiCall(req, res)})

app.listen(3000, () => {console.log('app is running on port 3000')})

/*
/signin route --> POST request  responds with success or fail
/register --> POST = posts a new user
/profile/userd --> GET  request (every user has their own userid)
/image --> Put  updates the photo count of each user


*/



