require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');
const { setUserContext } = require('./middleware/authMiddleware');
const merchRouter = require('./routes/merch');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const artistsRouter = require('./routes/artists');
const picturesRouter = require('./routes/pictures');
const exhibitionsRouter = require('./routes/exhibitions');
const galleriesRouter = require('./routes/galleries');
const collaborationsRouter = require('./routes/collaborations');
const brandsRouter = require('./routes/brands');
const journalsRouter = require('./routes/journals');
const publishesRouter = require('./routes/publishes');
const reviewsRouter = require('./routes/reviews');
const clientsRouter = require('./routes/clients');

const app = express();

const db = require('./models');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: process.env.SESSION_SECRET || 'a very secret key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: process.env.NODE_ENV === 'production' } 
}));

app.use(setUserContext); 

app.use((req, res, next) => {
  if (req.user) {
    res.locals.user = req.user;
  }
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/artists', artistsRouter);
app.use('/pictures', picturesRouter);
app.use('/exhibitions', exhibitionsRouter);
app.use('/galleries', galleriesRouter);
app.use('/merch', merchRouter);
app.use('/collaborations', collaborationsRouter);
app.use('/brands', brandsRouter);
app.use('/journals', journalsRouter);
app.use('/publishes', publishesRouter);
app.use('/reviews', reviewsRouter);
app.use('/clients', clientsRouter);

async function initializeDatabaseAndSync() {
  try {
    await db.sequelize.authenticate();
    console.log('Database connection has been established successfully.');
    // Add this line to sync models with the database
    // await db.sequelize.sync({ force: true }); // Use { force: true } for development to drop and recreate tables
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database or sync models:', error);
  }
}

// Await the database initialization and sync before starting the server
initializeDatabaseAndSync().then(() => {
  app.use(function(req, res, next) {
    next(createError(404));
  });

  app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
  });
});

module.exports = app;
