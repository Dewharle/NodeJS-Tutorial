const express = require('express')
const mongoose = require('mongoose')


const app = express()
var path = require('path');

const db = mongoose.connection

mongoose.connect('mongodb://localhost/w4')

db.on('error' , (error) => console.error(error))
db.once('open', ()=> console.log('Database Connected'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));


//call the routes from the routes folder
var homeRoutes  = require('./routes/home')

//definded middleware to use the routes
app.use('/home', homeRoutes)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

app.listen(3000, ()=> console.log('Server Started'))