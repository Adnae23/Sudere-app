/* eslint-disable no-console */
// const connection = require("./db-config")

require('dotenv').config();
const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const fileUpload = require('express-fileupload');
const dbRouter = require('./db/db.route');
const trainsRouter = require('./trains/trains.routes');
const usersRouter = require('./users/users.route');
const authRouter = require('./auth/auth.route');

app.use(cors({ origin: 'http://localhost:3000', methods: ['GET', 'PUT', 'POST', 'DELETE'], credentials: true }));
app.use(express.json());
app.use(fileUpload());
app.use(cookieParser());

const port = process.env.PORT ?? 5000;

app.listen(port, () => {
  // myConsole.log(new Error(`Server listening on port ${port}`));
  console.log(`Server listening on port ${port}.`);
});

app.use('/trains', trainsRouter);
app.use('/db', dbRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);
