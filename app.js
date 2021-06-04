const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const routes = require('./routes/index');
const path = require('path');


const app = express();
app.use(express.static(path.join(__dirname, 'public')))

// Passport Config
require('./config/passport')(passport);

// Express session
app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
  })
);
// Express body parser
app.use(express.urlencoded({ extended: true }));


// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());
app.use(routes);

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true ,useUnifiedTopology: true},

  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

  app.use(expressLayouts);
  app.set('view engine', 'ejs');
  app.set('views', 'views')

  // using the custom middleware for storing variable in response
// app.use((req, res, next) => {
//   res.locals.isAuthenticated = req.isAuthenticated()
//   next()
// })

// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});


app.use('/users', require('./routes/users.js'));






const PORT = process.env.PORT || 5000;


app.listen(PORT, console.log(`Server running on  ${PORT}`));
