const mongoose = require('mongoose');

//  DB connection
mongoose.connect('mongodb+srv://admin:Szigony@123@cluster0.7cl1x.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const express = require('express')
const product = require('./routes/user.route'); //imports routes
const app = express();
const cors = require('cors');



const bodyParser = require('body-parser');
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/user', product);

// Health Route check
app.get('/health', (req, res) => {
    res.send('ok')
  })

  app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });